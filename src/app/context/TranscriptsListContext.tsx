import { createContext, useContext, useState, useEffect } from "react"
import { TranscriptsList } from "../types/TranscriptsListType"
import { fetchTranscripts } from "../api/fetchTranscripts"

export type TranscriptsListContextType = {
  TranscriptsListData: TranscriptsList | null
  isLoadingTranscriptsList: boolean
  setProceedingAndDate: (proceeding: string, date: string) => void
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
  const [proceeding, setProceeding] = useState<string>("")
  const [date, setDate] = useState<string>("")

  const setProceedingAndDate = (newProceeding: string, newDate: string) => {
    setProceeding(newProceeding)
    setDate(newDate)
  }

  useEffect(() => {
    const fetchTranscriptsData = async () => {
      setIsLoadingTranscriptsList(true)
      try {
        const data = await fetchTranscripts(proceeding, date)
        setTranscriptsListData(data)
      } catch (error) {
        console.log("Error fetching transcripts data:", error)
      } finally {
        setIsLoadingTranscriptsList(false)
      }
    }

    if (proceeding && date) {
      fetchTranscriptsData()
    }
  }, [proceeding, date])

  return (
    <TranscriptsListContext.Provider
      value={{
        TranscriptsListData,
        isLoadingTranscriptsList,
        setProceedingAndDate,
      }}
    >
      {children}
    </TranscriptsListContext.Provider>
  )
}

export function useTranscriptsList() {
  const context = useContext(TranscriptsListContext)
  if (!context) {
    throw new Error(
      "useTranscriptsList must be used within a TranscriptsListProvider"
    )
  }
  return context
}
