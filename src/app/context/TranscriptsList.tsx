import { createContext, useContext, useState, useCallback } from "react"
import { TranscriptsList } from "../types"

export type TranscriptsListContextType = {
  TranscriptsListData: TranscriptsList | null
  isLoadingTranscriptsList: boolean
  TranscriptsListFetchData: (proceeding: string, date: string) => void
}

const TranscriptsListContext = createContext<
  TranscriptsListContextType | undefined
>(undefined)

type TranscriptsListProps = {
  children: React.ReactNode
}

export default function TranscriptsListProvider({
  children,
}: TranscriptsListProps) {
  const [TranscriptsListData, setTranscriptsListData] =
    useState<TranscriptsList | null>(null)
  const [isLoadingTranscriptsList, setIsLoadingTranscriptsList] =
    useState<boolean>(true)
  const [statementsList, setStatementsList] = useState([])

  const TranscriptsListFetchData = useCallback(
    async (proceeding: string, date: string) => {
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
        setStatementsList((prevStatementsList) => [
          ...prevStatementsList,
          ...(data.statements || []),
        ])
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
        statementsList,
        setStatementsList,
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
