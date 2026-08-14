import { useId } from "react";
import Svg, { Circle, Defs, G, Mask, Path, Rect } from "react-native-svg";

export type TwoShocksSymbolProps = {
  size?: number;
  color?: string;
  compact?: boolean;
  accessibilityLabel?: string;
};

const COIL_L =
  "M28 23 C33.74 23 38.4 24.23 38.4 25.75 C38.4 27.27 33.74 28.5 28 28.5 C22.26 28.5 17.6 29.73 17.6 31.25 C17.6 32.77 22.26 34 28 34 C33.74 34 38.4 35.23 38.4 36.75 C38.4 38.27 33.74 39.5 28 39.5 C22.26 39.5 17.6 40.73 17.6 42.25 C17.6 43.77 22.26 45 28 45 C33.74 45 38.4 46.23 38.4 47.75 C38.4 49.27 33.74 50.5 28 50.5 C22.26 50.5 17.6 51.73 17.6 53.25 C17.6 54.77 22.26 56 28 56";
const COIL_R =
  "M68 23 C73.74 23 78.4 24.23 78.4 25.75 C78.4 27.27 73.74 28.5 68 28.5 C62.26 28.5 57.6 29.73 57.6 31.25 C57.6 32.77 62.26 34 68 34 C73.74 34 78.4 35.23 78.4 36.75 C78.4 38.27 73.74 39.5 68 39.5 C62.26 39.5 57.6 40.73 57.6 42.25 C57.6 43.77 62.26 45 68 45 C73.74 45 78.4 46.23 78.4 47.75 C78.4 49.27 73.74 50.5 68 50.5 C62.26 50.5 57.6 51.73 57.6 53.25 C57.6 54.77 62.26 56 68 56";
const COIL_L_SM =
  "M14 11.8 C16.95 11.8 19.35 12.76 19.35 13.95 C19.35 15.14 16.95 16.1 14 16.1 C11.05 16.1 8.65 17.06 8.65 18.25 C8.65 19.44 11.05 20.4 14 20.4 C16.95 20.4 19.35 21.36 19.35 22.55 C19.35 23.74 16.95 24.7 14 24.7 C11.05 24.7 8.65 25.66 8.65 26.85 C8.65 28.04 11.05 29 14 29";
const COIL_R_SM =
  "M34 11.8 C36.95 11.8 39.35 12.76 39.35 13.95 C39.35 15.14 36.95 16.1 34 16.1 C31.05 16.1 28.65 17.06 28.65 18.25 C28.65 19.44 31.05 20.4 34 20.4 C36.95 20.4 39.35 21.36 39.35 22.55 C39.35 23.74 36.95 24.7 34 24.7 C31.05 24.7 28.65 25.66 28.65 26.85 C28.65 28.04 31.05 29 34 29";

/** React Native / Expo brand symbol. Requires `react-native-svg`. */
export function TwoShocksSymbol({
  size = 32,
  color = "#0B0B0F",
  compact = false,
  accessibilityLabel,
}: TwoShocksSymbolProps) {
  const maskId = `twoShocks${compact ? "Sm" : "Md"}${useId().replaceAll(":", "")}`;
  const box = compact ? 48 : 96;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${box} ${box}`}
      accessibilityRole={accessibilityLabel ? "image" : undefined}
      accessibilityLabel={accessibilityLabel}
      accessible={Boolean(accessibilityLabel)}
    >
      <Defs>
        <Mask id={maskId} x="0" y="0" width={box} height={box} maskUnits="userSpaceOnUse">
          <Rect width={box} height={box} fill="black" />
          {compact ? (
            <>
              <G fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                <Circle cx="14" cy="6.5" r="4.7" stroke="none" />
                <Path d="M14 11.2v26.2" strokeWidth="2.95" />
                <Path d={COIL_L_SM} strokeWidth="2.7" />
                <Circle cx="14" cy="41.5" r="4.7" stroke="none" />
                <Circle cx="34" cy="6.5" r="4.7" stroke="none" />
                <Path d="M34 11.2v26.2" strokeWidth="2.95" />
                <Path d={COIL_R_SM} strokeWidth="2.7" />
                <Circle cx="34" cy="41.5" r="4.7" stroke="none" />
              </G>
              <G fill="black">
                <Circle cx="14" cy="6.5" r="1.55" />
                <Circle cx="14" cy="41.5" r="1.55" />
                <Circle cx="34" cy="6.5" r="1.55" />
                <Circle cx="34" cy="41.5" r="1.55" />
              </G>
            </>
          ) : (
            <>
              <G fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                <Circle cx="28" cy="13" r="8" stroke="none" />
                <Path d="M28 21v54" strokeWidth="4.8" />
                <Path d={COIL_L} strokeWidth="3.7" />
                <Rect x="22.8" y="55.5" width="10.4" height="18" rx="5.2" stroke="none" />
                <Circle cx="28" cy="83" r="8" stroke="none" />
                <Circle cx="68" cy="13" r="8" stroke="none" />
                <Path d="M68 21v54" strokeWidth="4.8" />
                <Path d={COIL_R} strokeWidth="3.7" />
                <Rect x="62.8" y="55.5" width="10.4" height="18" rx="5.2" stroke="none" />
                <Circle cx="68" cy="83" r="8" stroke="none" />
              </G>
              <G fill="black">
                <Circle cx="28" cy="13" r="2.75" />
                <Circle cx="28" cy="83" r="2.75" />
                <Circle cx="68" cy="13" r="2.75" />
                <Circle cx="68" cy="83" r="2.75" />
              </G>
            </>
          )}
        </Mask>
      </Defs>
      <Rect width={box} height={box} fill={color} mask={`url(#${maskId})`} />
    </Svg>
  );
}
