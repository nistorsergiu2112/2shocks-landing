import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { StoreBadges } from "./StoreBadges";
import { Footer } from "./Footer";
import { LegalPage } from "./LegalPage";
import { BoltMark } from "./Brand";
import { contact, features } from "@/data/site";

afterEach(cleanup);

describe("static site contracts", () => {
  it("links directly to Google Play and keeps iOS unavailable", () => {
    render(<StoreBadges />);
    expect(screen.getByLabelText("App Store — coming soon").closest("a")).toBeNull();
    expect(screen.getByRole("link", { name: "Get it on Google Play" })).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.twoshocks.app");
  });

  it("renders contact and legal links with non-interactive social placeholders", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(screen.getByRole("link", { name: "Website terms" })).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: "Website privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("img", { name: "X — coming soon" }).closest("a, button")).toBeNull();
    expect(screen.getByRole("img", { name: "Facebook — coming soon" }).closest("a, button")).toBeNull();
  });

  it("shows the website policy revision and confirmed operator", () => {
    render(<LegalPage eyebrow="Legal" title="Test policy" intro="Intro"><p>Body</p></LegalPage>);
    expect(screen.queryByRole("note")).not.toBeInTheDocument();
    expect(screen.getByText("2 SHOCKS LTD")).toBeInTheDocument();
    expect(screen.getByText("Last updated")).toBeInTheDocument();
  });

  it("defines useful alternative text for every screenshot", () => {
    expect(features).toHaveLength(3);
    for (const feature of features) {
      expect(feature.screen.src).toMatch(/^\/screens\/store-2026-10-22\/.+\.png$/);
      expect(feature.screen.alt.length).toBeGreaterThan(20);
    }
  });

  it("uses the optically strengthened symbol with collision-safe masks", () => {
    const { container } = render(<><BoltMark /><BoltMark /></>);
    const symbols = Array.from(container.querySelectorAll("svg"));
    const maskIds = Array.from(container.querySelectorAll("mask"), (mask) => mask.id);

    expect(symbols).toHaveLength(2);
    expect(symbols.every((symbol) => symbol.getAttribute("viewBox") === "0 0 48 48")).toBe(true);
    expect(new Set(maskIds).size).toBe(maskIds.length);
  });
});
