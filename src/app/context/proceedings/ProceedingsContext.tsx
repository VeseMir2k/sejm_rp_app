import { createContext } from "react"
import { TProceedingsContext } from "./ProceedingsContext.type"

export const ProceedingsContext = createContext<TProceedingsContext | null>(
  null
)
