import { createContext } from "react"
import { TParliamentariansContext } from "./ParliamentariansContext.type"

export const ParliamentariansContext = createContext<TParliamentariansContext | null>(null)
