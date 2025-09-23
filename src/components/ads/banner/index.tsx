"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdBanner({ adSlot }: { adSlot: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }

      const timer = setTimeout(() => {
        const adEl = containerRef.current?.querySelector("ins.adsbygoogle")
        const iframe = adEl?.querySelector("iframe")
        if (!iframe) {
          // Không có quảng cáo -> ẩn container
          setVisible(false)
        }
      }, 2000) // chờ 2s cho adsense load

      return () => clearTimeout(timer)
    } catch (e) {
      console.error("AdSense error:", e)
    }
  }, [adSlot])

  if (!visible) return null

  return (
    <div ref={containerRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7157280156441150"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
