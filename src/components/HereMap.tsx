import { useEffect, useRef } from 'react'

import quintaIcon from '../assets/quintaIcon.png';

declare global {
  interface Window {
    H: any;
  }
}

const HereMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const platform = new window.H.service.Platform({
      apikey: import.meta.env.VITE_APP_HERE_API_KEY
    })

    const defaultLayers = platform.createDefaultLayers()
    const center = { lat: 20.894056870661075, lng: -103.43919000344953 }

    const map = new window.H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center,
        zoom: 14,
        pixelRatio: window.devicePixelRatio || 1,
      }
    )

    window.addEventListener("resize", () => map.getViewPort().resize())

    new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(map)
    )

    window.H.ui.UI.createDefault(map, defaultLayers)

    // Crear un icono personalizado
    const icon = new window.H.map.Icon(quintaIcon, {
      size: { w: 48, h: 48 }
    })

    // Agregar marcador con icono
    const marker = new window.H.map.Marker(center, { icon })
    map.addObject(marker)

    return () => map.dispose()
  }, [])

  return <div ref={mapRef} style={{ width: "100%", height: "90%" }} />
}

export default HereMap
