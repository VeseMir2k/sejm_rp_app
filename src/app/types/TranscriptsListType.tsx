import { TranscriptPerson } from "./TranscriptPerson"

//! TranscriptsList
export type TranscriptsList = {
  date: string
  proceedingNum: number
  statements: TranscriptPerson[]
}
