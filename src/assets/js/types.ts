import type { RouteRecordName } from 'vue-router'

export interface NavItemProps {
  to: RouteRecordName
}

export interface RowItemProps {
  leftItem: string
  rightItem: string
}
