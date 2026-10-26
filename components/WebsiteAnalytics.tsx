"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { googlePlayUrl, siteUrl } from "@/data/site";
import { storeLocations } from "@/data/store-locations";

const preferenceKey = "2shocks:website-statistics-disabled";
const preferenceEvent = "2shocks:website-statistics-change";
let temporaryPreference: boolean | null = null;

function statisticsDisabled() {
  if (temporaryPreference !== null) return temporaryPreference;
  try {
    return window.localStorage.getItem(preferenceKey) === "true";
  } catch {
    return false;
  }
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === preferenceKey || event.key === null) {
      temporaryPreference = null;
      if (statisticsDisabled()) {
        window.location.reload();
        return;
      }
      callback();
    }
  };
  window.addEventListener(preferenceEvent, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(preferenceEvent, callback);
    window.removeEventListener("storage", onStorage);
  };
}

const serverSnapshot = (): boolean | null => null;
const allowedStoreLocations = new Set<string>(storeLocations);

function beforeSend(event: BeforeSendEvent) {
  if (statisticsDisabled()) return null;
  // Search parameters and fragments can contain information a visitor supplied.
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.href };
}

export function WebsiteAnalytics() {
  const disabled = useSyncExternalStore(subscribe, statisticsDisabled, serverSnapshot);
  useEffect(() => {
    if (disabled !== false) return;
    function onStoreClick(event: MouseEvent) {
      if (statisticsDisabled() || (event.type === "click" ? event.button !== 0 : event.button !== 1)) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-store-location]") : null;
      const location = link?.dataset.storeLocation;
      if (!link || link.href !== googlePlayUrl || !location || !allowedStoreLocations.has(location)) return;
      // Use the page's fixed canonical path, never the visitor's URL or referrer.
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) return;
      const url = new URL(canonical.href);
      if (url.origin !== siteUrl) return;
      try {
        track("google_play_click", { page: url.pathname, location });
      } catch {
        // Download links must still work if analytics is blocked or unavailable.
      }
    }
    document.addEventListener("click", onStoreClick);
    document.addEventListener("auxclick", onStoreClick);
    return () => {
      document.removeEventListener("click", onStoreClick);
      document.removeEventListener("auxclick", onStoreClick);
    };
  }, [disabled]);
  // Read the browser preference before mounting the existing analytics script.
  return disabled === false ? <Analytics beforeSend={beforeSend} /> : null;
}

export function WebsiteStatisticsControl() {
  const disabled = useSyncExternalStore(subscribe, statisticsDisabled, serverSnapshot);
  const [storageUnavailable, setStorageUnavailable] = useState(false);

  function changePreference() {
    const next = !statisticsDisabled();
    temporaryPreference = next;
    try {
      window.localStorage.setItem(preferenceKey, String(next));
      // A fresh document also stops an already-loaded analytics script.
      window.location.reload();
    } catch {
      setStorageUnavailable(true);
      window.dispatchEvent(new Event(preferenceEvent));
    }
  }

  return <div className="website-statistics-control">
    <p role="status">Website statistics are {disabled === null ? "loading your preference" : disabled ? "off in this browser" : "on in this browser"}.</p>
    <button type="button" disabled={disabled === null} onClick={changePreference}>
      {disabled ? "Turn on website statistics" : "Turn off website statistics"}
    </button>
    <p>Your choice applies to this browser. We store only this preference on your device; it is separate from the app’s privacy choices. Turning statistics off does not erase earlier visit statistics or essential hosting logs.</p>
    {storageUnavailable && <p role="alert">Your browser could not save the preference. Your choice applies in this tab until it is refreshed.</p>}
  </div>;
}
