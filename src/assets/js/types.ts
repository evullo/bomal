import type { RouteRecordName } from 'vue-router'

export interface NavItemProps {
  to: RouteRecordName
}

export interface RowItemProps {
  leftItem: string
  rightItem: string
}

export interface CarouselItemProps {
  src: string
}

export interface CarouselProps {
  images: string[]
  startIndex: number
}

export interface LinkProps {
  linkTo: string
}
