import Image from "next/image";
import { googlePlayUrl } from "@/data/site";

export function GooglePlayBadge() {
  return <a className="google-play-badge" href={googlePlayUrl}><Image src="/brand/google-play-badge.png" alt="Get it on Google Play" width={478} height={142} /></a>;
}

export function StoreBadges() {
  return <div className="store-badges" aria-label="Mobile app availability">
    <GooglePlayBadge />
    <span className="ios-coming-soon" aria-label="App Store — coming soon">iOS · Coming soon</span>
  </div>;
}
