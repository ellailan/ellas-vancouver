import L from 'leaflet'
import type { CategoryMeta } from './types'

const iconCache = new Map<string, L.DivIcon>()

export function createCategoryIcon(meta: CategoryMeta, isActive: boolean): L.DivIcon {
  const cacheKey = `${meta.id}-${isActive}`
  const cached = iconCache.get(cacheKey)
  if (cached) return cached

  const size = isActive ? 46 : 38
  const scaleWrap = isActive ? 58 : 52

  const html = `
    <div class="pin-marker pin-bounce" style="position:relative;width:${scaleWrap}px;height:${scaleWrap + 12}px;">
      <div style="width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;background:${meta.color};transform:rotate(-45deg);position:absolute;top:9px;left:${(scaleWrap - size) / 2}px;border:3px solid #FFFBF2;box-shadow:0 4px 10px rgba(58,46,42,0.35);"></div>
      <div style="position:absolute;top:${9 + size * 0.14}px;left:0;width:${scaleWrap}px;height:${size}px;display:flex;align-items:center;justify-content:center;font-size:${isActive ? 22 : 18}px;pointer-events:none;">${meta.emoji}</div>
    </div>
  `

  const icon = L.divIcon({
    html,
    className: 'custom-pin-icon',
    iconSize: [scaleWrap, scaleWrap + 12],
    iconAnchor: [scaleWrap / 2, scaleWrap + 10],
    popupAnchor: [0, -scaleWrap - 6],
  })

  iconCache.set(cacheKey, icon)
  return icon
}
