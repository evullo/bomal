import type { RouteRecordName } from 'vue-router'

export interface NavItemProps {
  to: RouteRecordName
}

export interface PositionRowItemProps {
  position: string
  dates: string
}
