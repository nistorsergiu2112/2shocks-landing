"use client";

import { useState, useSyncExternalStore } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

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
const beforeSend = (event: BeforeSendEvent) => statisticsDisabled() ? null : event;

export function WebsiteAnalytics() {
  const disabled = useSyncExternalStore(subscribe, statisticsDisabled, serverSnapshot);
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
