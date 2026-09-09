import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { StoreBadges } from "./StoreBadges";
import { Footer } from "./Footer";
import { LegalPage } from "./LegalPage";
import { BoltMark } from "./Brand";
import { contact, features } from "@/data/site";

afterEach(cleanup);

describe("static site contracts", () => {
  it("renders both stores as coming soon and not as links", () => {
    const { container } = render(<StoreBadges />);
    expect(screen.getByLabelText("App Store — coming soon")).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByLabelText("Google Play — coming soon")).toHaveAttribute("aria-disabled", "true");
    expect(container.querySelectorAll("a")).toHaveLength(0);
  });

  it("renders contact and legal links with non-interactive social placeholders", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(screen.getByRole("link", { name: "Terms & conditions" })).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
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
      expect(feature.screen.src).toMatch(/^\/screens\/.+\.webp$/);
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
