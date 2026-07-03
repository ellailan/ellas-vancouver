import { forwardRef, useImperativeHandle, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { Location } from '../types'
import { categoryById } from '../data/categories'
import { createCategoryIcon } from '../mapIcons'
import LocationPopup from './LocationPopup'

export interface MapViewHandle {
  flyToLocation: (location: Location) => void
  fitAll: (locations: Location[]) => void
}

interface Props {
  locations: Location[]
  activeId: string | null
  onSelect: (id: string) => void
}

const VANCOUVER_CENTER: [number, number] = [49.2565, -123.14]

const MapView = forwardRef<MapViewHandle, Props>(({ locations, activeId, onSelect }, ref) => {
  const mapRef = useRef<L.Map | null>(null)
  const markerRefs = useRef<Record<string, L.Marker>>({})

  useImperativeHandle(ref, () => ({
    flyToLocation: (location) => {
      const map = mapRef.current
      if (!map) return
      map.flyTo([location.latitude, location.longitude], 15.5, { duration: 1.1 })
      window.setTimeout(() => {
        markerRefs.current[location.id]?.openPopup()
      }, 550)
    },
    fitAll: (locs) => {
      const map = mapRef.current
      if (!map || locs.length === 0) return
      const bounds = L.latLngBounds(locs.map((l) => [l.latitude, l.longitude] as [number, number]))
      map.flyToBounds(bounds, { padding: [64, 64], duration: 1.0, maxZoom: 14 })
    },
  }))

  return (
    <MapContainer
      center={VANCOUVER_CENTER}
      zoom={12.4}
      zoomControl={true}
      className="w-full h-full"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      {locations.map((location) => {
        const meta = categoryById.get(location.category)
        if (!meta) return null
        const isActive = activeId === location.id
        return (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={createCategoryIcon(meta, isActive)}
            eventHandlers={{ click: () => onSelect(location.id) }}
            ref={(instance) => {
              if (instance) markerRefs.current[location.id] = instance
            }}
          >
            <Popup closeButton={false} maxWidth={280} minWidth={240}>
              <LocationPopup location={location} />
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
})

MapView.displayName = 'MapView'

export default MapView
