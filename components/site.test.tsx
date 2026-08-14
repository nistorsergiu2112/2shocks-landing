import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StoreBadges } from "./StoreBadges";
import { Footer } from "./Footer";
import { LegalPage } from "./LegalPage";
import { BoltMark } from "./Brand";
import { contact, features } from "@/data/site";

describe("static site contracts", () => {
  it("renders both stores as coming soon and not as links", () => {
    const { container } = render(<StoreBadges />);
    expect(screen.getByLabelText("App Store — coming soon")).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByLabelText("Google Play — coming soon")).toHaveAttribute("aria-disabled", "true");
    expect(container.querySelectorAll("a")).toHaveLength(0);
  });

  it("renders contact and legal links but no empty social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.queryByText(/instagram|facebook|tiktok|youtube/i)).not.toBeInTheDocument();
  });

  it("shows the legal draft warning while operator data is mocked", () => {
    render(<LegalPage eyebrow="Legal" title="Test policy" intro="Intro"><p>Body</p></LegalPage>);
    expect(screen.getByRole("note")).toHaveTextContent("Draft operator details");
  });

  it("defines useful alternative text for every screenshot", () => {
    expect(features).toHaveLength(3);
    for (const feature of features) {
      expect(feature.screen.src).toMatch(/^\/screens\/.+\.png$/);
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
