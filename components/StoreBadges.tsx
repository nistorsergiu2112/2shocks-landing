import { stores } from "@/data/site";

function StoreIcon({ store }: { store: "App Store" | "Google Play" }) {
  return store === "App Store" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.7 12.7c0-2.8 2.3-4.2 2.4-4.3a5.2 5.2 0 0 0-4.1-2.2c-1.7-.2-3.4 1-4.1 1-.8 0-2.1-1-3.4-1-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4 0 1.9-.9 3.7-.9 1.7 0 2.2.9 3.7.9s2.5-1.3 3.4-2.7c1.1-1.5 1.5-3 1.5-3.1-.1 0-3.5-1.4-3.5-4ZM14.9 4.4A4.9 4.9 0 0 0 16 .9a5 5 0 0 0-3.3 1.7 4.7 4.7 0 0 0-1.2 3.3 4.1 4.1 0 0 0 3.4-1.5Z" fill="currentColor" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.4 2.8 10.8 9.1-10.8 9.3c-.3-.5-.4-1-.4-1.7v-15c0-.6.1-1.2.4-1.7Zm12.1 10.3 2.7 2.3-11.8 6.7 9.1-9Zm3.8-3.5 2 1.1c1 .6 1 1.5 0 2l-2 1.2-2.7-2.3 2.7-2Zm-12.9-7.7 11.8 6.7-2.7 2.3-9.1-9Z" fill="currentColor" /></svg>
  );
}

export function StoreBadges() {
  return (
    <div className="store-badges" aria-label="Mobile app availability">
      {stores.map(({ store }) => (
        <span className="store-badge" key={store} aria-label={`${store} — coming soon`} aria-disabled="true">
          <StoreIcon store={store} />
          <span><small>Coming soon on</small><strong>{store}</strong></span>
        </span>
      ))}
    </div>
  );
}
