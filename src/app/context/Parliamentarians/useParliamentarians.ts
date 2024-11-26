import { useContext } from "react"
import { ParliamentariansContext } from "./ParliamentariansContext"

export function useParliamentarians() {
  const context = useContext(ParliamentariansContext)
  if (!context) {
    throw new Error("useParliamentarians must be used within a ParliamentariansProvider")
  }
  return context
}
