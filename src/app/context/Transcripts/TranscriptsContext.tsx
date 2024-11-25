import { createContext } from "react"
import { TTranscriptsContext } from "./TranscriptsContext.type"

export const TranscriptsContext = createContext<TTranscriptsContext | null>(
  null
)
