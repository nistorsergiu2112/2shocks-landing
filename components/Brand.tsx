import Link from "next/link";
import { TwoShocksSymbol } from "../brand-assets/components/TwoShocksSymbol";

export function BoltMark({
  decorative = true,
  compact = true,
}: {
  decorative?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="bolt-mark" aria-hidden={decorative || undefined} aria-label={decorative ? undefined : "2Shocks"}>
      <TwoShocksSymbol compact={compact} />
    </span>
  );
}

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="2Shocks home">
      <BoltMark />
      <span>2shocks</span>
    </Link>
  );
}
