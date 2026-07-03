export type Category =
  | 'Dinner'
  | 'Lowkey Greasy but a Vibe'
  | 'Treats & Coffee'
  | 'Shopping & Trinkets'
  | 'UBC / Campus'
  | 'Entertainment'
  | 'Views'

export interface Location {
  id: string
  name: string
  category: Category
  address: string
  latitude: number
  longitude: number
  description: string
}

export interface CategoryMeta {
  id: Category
  label: string
  emoji: string
  color: string
  colorDark: string
}
