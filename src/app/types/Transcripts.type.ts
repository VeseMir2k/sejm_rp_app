import { TStatement } from "./Statement.type"

export type TTranscripts = {
  date: string
  proceedingNum: number
  statements: TStatement[]
}
