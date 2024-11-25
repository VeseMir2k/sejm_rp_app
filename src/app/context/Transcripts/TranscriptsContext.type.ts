import { TTranscripts } from "../../types/Transcripts.type"

export type TTranscriptsProps = {
  children: React.ReactNode
}

export type TTranscriptsContext = {
  transcripts: TTranscripts | null
  isLoading: boolean
  handleGetTranscripts: (proceeding: string, date: string) => void
}
