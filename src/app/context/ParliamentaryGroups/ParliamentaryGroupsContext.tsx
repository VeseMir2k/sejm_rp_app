import { createContext } from "react"
import { TParliamentaryGroupsContext } from "./ParliamentaryGroupsContext.type"

export const ParliamentaryGroupsContext = createContext<TParliamentaryGroupsContext | null>(null)
