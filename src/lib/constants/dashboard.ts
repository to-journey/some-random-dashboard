import { Department } from "@/lib/types/user"

export const DEPARTMENTS: readonly Department[] = ["Sales", "Finance", "Development", "Marketing"] as const

export const COLUMN_CONFIG = {
  ID: {
    flex: 0.5,
    minWidth: 70,
  },
  NAME: {
    flex: 1,
    minWidth: 180
  },
  AGE: {
    flex: 0.5,
    minWidth: 140
  },
  JOIN_DATE: {
    flex: 1,
    minWidth: 180
  },
  DEPARTMENT: {
    flex: 1,
    minWidth: 220
  },
  ACTIONS: {
    flex: 0.5,
    minWidth: 160
  }
} as const

