import { useContext } from "react"
import { MembersOfParliamentContext } from "./MembersOfParliamentContext"

export function useMembersOfParliament() {
  const context = useContext(MembersOfParliamentContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
