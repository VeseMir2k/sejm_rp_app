import { TranscriptsList } from "../../types/TranscriptsList.type"

export type TranscriptsListPropsType = {
  children: React.ReactNode
}

export type TranscriptsListContextType = {
  TranscriptsListData: TranscriptsList | null
  isLoadingTranscriptsList: boolean
  TranscriptsListFetchData: (proceeding: string, date: string) => void
}
