import { useContext } from "react"
import { ParliamentaryGroupsContext } from "./ParliamentaryGroupsContext"
import { TParliamentaryGroupsContext } from "./ParliamentaryGroupsContext.type"

export function useParliamentaryGroups(): TParliamentaryGroupsContext {
  const context = useContext(ParliamentaryGroupsContext)
  if (!context) {
    throw new Error(
      "useParliamentaryGroups must be used within a ParliamentaryGroupsProvider"
    )
  }
  return context
}
