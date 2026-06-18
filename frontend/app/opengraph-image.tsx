import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Jonathan Lyashko portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const headshotPath = path.join(process.cwd(), "public", "headshot.jpg");
  const headshotBuffer = await readFile(headshotPath);
  const headshotDataUrl = `data:image/jpeg;base64,${headshotBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 22% 24%, rgba(25, 92, 255, 0.14), transparent 30%), radial-gradient(circle at 78% 20%, rgba(0, 221, 255, 0.12), transparent 24%), linear-gradient(180deg, #06080d 0%, #090b11 100%)",
          color: "#d7f4ff",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(102, 197, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 197, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.45,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "1px solid rgba(140, 215, 255, 0.14)",
            borderRadius: 24,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
          }}
        >
          <span
            style={{
              fontSize: 118,
              fontWeight: 700,
              color: "#d7f4ff",
            }}
          >
            Jonathan
          </span>
          <span
            style={{
              fontSize: 130,
              fontWeight: 700,
              color: "#7fe9ff",
              textShadow: "0 0 28px rgba(127, 233, 255, 0.22)",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
            }}
          >
            Lyashko
          </span>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 320,
            height: 420,
            borderRadius: 28,
            border: "1px solid rgba(140, 215, 255, 0.18)",
            background: "rgba(10, 14, 22, 0.74)",
            boxShadow: "0 0 30px rgba(0, 221, 255, 0.08)",
            padding: 14,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 28,
              background:
                "linear-gradient(180deg, rgba(127, 233, 255, 0.06) 0%, rgba(127, 233, 255, 0.01) 100%)",
            }}
          />
          <img
            src={headshotDataUrl}
            alt="Jonathan Lyashko"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
