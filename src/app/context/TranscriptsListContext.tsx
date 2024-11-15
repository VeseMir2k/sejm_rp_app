import { createContext, useContext, useState } from "react"
import { fetchTranscripts } from "@/app/api/fetchTranscripts"

type TranscriptsState = {
  [key: string]: {
    data: { statements: { name: string }[] } | null
    isLoading: boolean
  }
}

type TranscriptsListContextType = {
  transcriptsState: TranscriptsState
  fetchTranscriptsData: (slug: string, date: string) => void
}

const TranscriptsListContext = createContext<
  TranscriptsListContextType | undefined
>(undefined)

export function TranscriptsListProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transcriptsState, setTranscriptsState] = useState<TranscriptsState>({})

  const fetchTranscriptsData = async (slug: string, date: string) => {
    const key = `${slug}-${date}`
    setTranscriptsState((prevState) => ({
      ...prevState,
      [key]: { data: null, isLoading: true },
    }))

    try {
      const data = await fetchTranscripts(slug, date)
      setTranscriptsState((prevState) => ({
        ...prevState,
        [key]: { data, isLoading: false },
      }))
    } catch (error) {
      console.error("Error fetching transcripts:", error)
      setTranscriptsState((prevState) => ({
        ...prevState,
        [key]: { data: null, isLoading: false },
      }))
    }
  }

  return (
    <TranscriptsListContext.Provider
      value={{ transcriptsState, fetchTranscriptsData }}
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
