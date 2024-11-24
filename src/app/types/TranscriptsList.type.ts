import { TranscriptMember } from "./TranscriptMember.type"

//! TranscriptsList
export type TranscriptsList = {
  date: string
  proceedingNum: number
  statements: TranscriptMember[]
}
