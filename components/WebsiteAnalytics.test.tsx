import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { AnalyticsProps } from "@vercel/analytics/next";
import { googlePlayUrl } from "@/data/site";
import { WebsiteAnalytics } from "./WebsiteAnalytics";

const analytics = vi.hoisted(() => ({ track: vi.fn(), props: null as AnalyticsProps | null }));
vi.mock("@vercel/analytics", () => ({ track: analytics.track }));
vi.mock("@vercel/analytics/next", () => ({
  Analytics: (props: AnalyticsProps) => { analytics.props = props; return null; },
}));

beforeEach(() => {
  localStorage.clear();
  analytics.track.mockReset();
  analytics.props = null;
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = "https://www.2shocks.com/guides/motorcycle-service-plan";
  document.head.append(canonical);
});
afterEach(() => {
  cleanup();
  document.querySelector('link[rel="canonical"]')?.remove();
});

function setup(location = "guide", href = googlePlayUrl) {
  // Prevent JSDOM navigation; the production listener never cancels it.
  return render(<><a href={href} data-store-location={location} onClick={event => event.preventDefault()}><span>Download</span></a><WebsiteAnalytics /></>);
}

describe("Google Play measurement", () => {
  it("records one event from a nested click with only a canonical path and fixed location", () => {
    const view = setup();
    fireEvent.click(view.getByText("Download"));
    expect(analytics.track).toHaveBeenCalledExactlyOnceWith("google_play_click", {
      page: "/guides/motorcycle-service-plan", location: "guide",
    });
  });

  it("does not mount analytics or send a click after an existing opt-out", () => {
    localStorage.setItem("2shocks:website-statistics-disabled", "true");
    const view = setup();
    fireEvent.click(view.getByText("Download"));
    expect(analytics.props).toBeNull();
    expect(analytics.track).not.toHaveBeenCalled();
  });

  it("checks the preference again at click and dispatch time", () => {
    const view = setup();
    localStorage.setItem("2shocks:website-statistics-disabled", "true");
    fireEvent.click(view.getByText("Download"));
    expect(analytics.track).not.toHaveBeenCalled();
    expect(analytics.props?.beforeSend?.({ type: "event", url: "https://www.2shocks.com/" })).toBeNull();
  });

  it("removes query strings and fragments from pageviews and events", () => {
    setup();
    for (const type of ["pageview", "event"] as const) {
      expect(analytics.props?.beforeSend?.({ type, url: "https://www.2shocks.com/?email=private#motorcycle" })).toEqual({
        type, url: "https://www.2shocks.com/",
      });
    }
  });

  it.each([["unrecognised-location", googlePlayUrl], ["guide", "https://example.com/"]])("ignores unexpected location or destination: %s", (location, href) => {
    const view = setup(location, href);
    fireEvent.click(view.getByText("Download"));
    expect(analytics.track).not.toHaveBeenCalled();
  });

  it("counts middle-clicks, ignores right-clicks and does not cancel them", () => {
    const view = setup();
    const rightClick = new MouseEvent("auxclick", { bubbles: true, cancelable: true, button: 2 });
    view.getByText("Download").dispatchEvent(rightClick);
    expect(analytics.track).not.toHaveBeenCalled();
    const middleClick = new MouseEvent("auxclick", { bubbles: true, cancelable: true, button: 1 });
    view.getByText("Download").dispatchEvent(middleClick);
    expect(analytics.track).toHaveBeenCalledOnce();
    expect(middleClick.defaultPrevented).toBe(false);
  });

  it("cleans up listeners and tolerates a blocked analytics provider", () => {
    const view = setup();
    analytics.track.mockImplementation(() => { throw new Error("blocked"); });
    expect(() => fireEvent.click(view.getByText("Download"))).not.toThrow();
    view.unmount();
    analytics.track.mockReset();
    const link = document.createElement("a");
    link.href = googlePlayUrl;
    link.dataset.storeLocation = "guide";
    document.body.append(link);
    link.dispatchEvent(new MouseEvent("auxclick", { bubbles: true, button: 1 }));
    expect(analytics.track).not.toHaveBeenCalled();
    link.remove();
  });
});
