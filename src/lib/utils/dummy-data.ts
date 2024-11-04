import { User } from "@/lib/types/user"
import { DEPARTMENTS } from "@/lib/constants/dashboard"

export const initialUsers: User[] = [
  {
    id: "1f8295b3-1234-4c02-b23d-f4db429ac152",
    name: "James Carter",
    age: 25,
    joinDate: new Date("2024-05-03"),
    role: DEPARTMENTS[0],
  },
  {
    id: "3e9506a4-0b12-5a83-c47f-e3ca682d1721",
    name: "Emily Bennett",
    age: 28,
    joinDate: new Date("2019-08-25"),
    role: DEPARTMENTS[1],
  },
  {
    id: "9a012d5f-8179-3b06-b87c-a0be2159e5f3",
    name: "Ethan Morgan",
    age: 35,
    joinDate: new Date("2016-03-01"),
    role: DEPARTMENTS[2],
  },
  {
    id: "7d1409c1-3281-4c89-f37e-c4da31849124",
    name: "Sophia Collins",
    age: 23,
    joinDate: new Date("2021-04-12"),
    role: DEPARTMENTS[3],
  },
  {
    id: "5c307ab8-1045-5d23-d58f-e2cb62187109",
    name: "Michael Turner",
    age: 45,
    joinDate: new Date("2023-06-24"),
    role: DEPARTMENTS[3],
  },
]