"use client";
import { useEffect, useState } from "react";
import s from "@/app/home.module.css";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 700);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <button className={s.backToTop} data-visible={visible} tabIndex={visible ? 0 : -1} aria-hidden={!visible} aria-label="Back to top" onClick={() => {
    document.getElementById("main-content")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 12 6-6 6 6M12 6v13" /></svg></button>;
}
