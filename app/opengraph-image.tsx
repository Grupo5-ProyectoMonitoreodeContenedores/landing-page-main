import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "WasteTrack - Gestión Inteligente de Residuos"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* @ts-ignore */}
        <img
          src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wasteTrackLogo-NiyDN6tYzMeVpImKfLflmeBclwQnDV.png`}
          width={120}
          height={120}
          alt="WasteTrack Logo"
        />
        <div style={{ fontSize: 64, fontWeight: "bold", color: "#005c2f" }}>WasteTrack</div>
      </div>
      <div style={{ fontSize: 32, color: "#666", maxWidth: "80%", textAlign: "center" }}>
        Transformando la gestión de residuos urbanos para ciudades más limpias y sostenibles
      </div>
    </div>,
    {
      ...size,
    },
  )
}
