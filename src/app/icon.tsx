import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Generated placeholder favicon — a simple "N" monogram echoing VSN's real
 * circular cream-and-gold Instagram profile mark. Swap for the real vector
 * logo once received (see README "Open items").
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#B08A4E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 20,
          color: "#F6F1E7",
        }}
      >
        N
      </div>
    ),
    size
  );
}
