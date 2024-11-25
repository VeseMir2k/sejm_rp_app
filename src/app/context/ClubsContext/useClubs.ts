import { useContext } from "react"
import { ClubsContext } from "./ClubsContext"
import { TClubsContext } from "./ClubsContext.type"

export function useClubs(): TClubsContext {
  const context = useContext(ClubsContext)
  if (!context) {
    throw new Error("useClubs must be used within a ClubsProvider")
  }
  return context
}
