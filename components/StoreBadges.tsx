import Image from "next/image";
import { googlePlayUrl } from "@/data/site";
import type { StoreLocation } from "@/data/store-locations";

export function GooglePlayBadge({ location }: { location: StoreLocation }) {
  return <a className="google-play-badge" href={googlePlayUrl} data-store-location={location}><Image src="/brand/google-play-badge.png" alt="Get it on Google Play" width={478} height={142} /></a>;
}

export function StoreBadges({ location = "footer" }: { location?: StoreLocation }) {
  return <div className="store-badges" aria-label="Mobile app availability">
    <GooglePlayBadge location={location} />
    <span className="ios-coming-soon" aria-label="App Store — coming soon">iOS · Coming soon</span>
  </div>;
}
