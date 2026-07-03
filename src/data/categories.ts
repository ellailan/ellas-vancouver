import type { CategoryMeta } from '../types'

export const categories: CategoryMeta[] = [
  {
    id: 'Dinner',
    label: 'Dinner',
    emoji: '🍽️',
    color: '#C97064',
    colorDark: '#A4483E',
  },
  {
    id: 'Lowkey Greasy but a Vibe',
    label: 'Lowkey Greasy but a Vibe',
    emoji: '🍔',
    color: '#E0A458',
    colorDark: '#C1863C',
  },
  {
    id: 'Treats & Coffee',
    label: 'Treats & Coffee',
    emoji: '☕',
    color: '#8C6A52',
    colorDark: '#6B4E39',
  },
  {
    id: 'Shopping & Trinkets',
    label: 'Shopping & Trinkets',
    emoji: '🛍️',
    color: '#7FA8B8',
    colorDark: '#517686',
  },
  {
    id: 'UBC / Campus',
    label: 'UBC / Campus',
    emoji: '🎓',
    color: '#3F5D4E',
    colorDark: '#2A4136',
  },
]

export const categoryById = new Map(categories.map((c) => [c.id, c]))
