import { createContext } from "react"
import { TMembersOfParliamentContext } from "./MembersOfParliamentContext.type"

export const MembersOfParliamentContext =
  createContext<TMembersOfParliamentContext | null>(null)
