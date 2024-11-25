import { useContext } from "react"
import { TranscriptsContext } from "./TranscriptsContext"

export function useTranscripts() {
  const context = useContext(TranscriptsContext)
  if (!context) {
    throw new Error("useProceeding must be used within a ProceedingsProvider")
  }
  return context
}
