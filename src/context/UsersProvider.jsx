"use client"
import React, { useState } from "react"
import { UsersContext } from "./UsersContext"
import { INITIAL_USERS } from "@/lib/utils/utils"

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(INITIAL_USERS)
  const value = {
    users,
    setUsers,
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>)
}

export { UsersProvider }
