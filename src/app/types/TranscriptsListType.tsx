import { TranscriptPerson } from "./TranscriptPersonType"

//! TranscriptsList
export type TranscriptsList = {
  date: string
  proceedingNum: number
  statements: TranscriptPerson[]
}
