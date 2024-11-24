import { createContext, useContext, useState, useCallback } from "react"
import { TranscriptsList } from "../../types/TranscriptsList.type"
import {
  TranscriptsListContextType,
  TranscriptsListPropsType,
} from "./TranscriptsListContext.type"

const TranscriptsListContext = createContext<
  TranscriptsListContextType | undefined
>(undefined)

export default function TranscriptsListProvider({
  children,
}: TranscriptsListPropsType) {
  const [TranscriptsListData, setTranscriptsListData] =
    useState<TranscriptsList | null>(null)

  const [isLoadingTranscriptsList, setIsLoadingTranscriptsList] =
    useState<boolean>(true)

  const TranscriptsListFetchData = useCallback(
    async (proceeding: string, date: string) => {
      setTranscriptsListData(null)
      setIsLoadingTranscriptsList(true)
      try {
        const response = await fetch(
          `https://api.sejm.gov.pl/sejm/term10/proceedings/${proceeding}/${date}/transcripts`
        )
        if (!response.ok) {
          throw new Error("Error")
        }
        const data = await response.json()
        setTranscriptsListData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingTranscriptsList(false)
      }
    },
    []
  )

  return (
    <TranscriptsListContext.Provider
      value={{
        TranscriptsListData,
        isLoadingTranscriptsList,
        TranscriptsListFetchData,
      }}
    >
      {children}
    </TranscriptsListContext.Provider>
  )
}

export function useTranscriptsList() {
  const context = useContext(TranscriptsListContext)
  if (!context) {
    throw new Error("useProceeding must be used within a ProceedingsProvider")
  }
  return context
}
