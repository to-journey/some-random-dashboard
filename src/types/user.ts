export type Department = "Sales" | "Finance" | "Development" | "Marketing"

export type User = {
  id: string
  name: string
  age: number | null
  joinDate: Date
  role: Department
  isNew?: boolean
}
