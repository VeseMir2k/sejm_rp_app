import { useState, useCallback } from "react"
import { TTranscripts } from "../../types/Transcripts.type"
import { TTranscriptsProps } from "./TranscriptsContext.type"
import { TranscriptsContext } from "./TranscriptsContext"

export const TranscriptsProvider = ({ children }: TTranscriptsProps) => {
  const [transcripts, setTranscripts] = useState<TTranscripts | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleGetTranscripts = useCallback(
    async (proceeding: string, date: string) => {
      setTranscripts(null)
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://api.sejm.gov.pl/sejm/term10/proceedings/${proceeding}/${date}/transcripts`
        )
        if (!response.ok) {
          throw new Error("Error")
        }
        const data = await response.json()
        setTranscripts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  return (
    <TranscriptsContext.Provider
      value={{
        transcripts,
        isLoading,
        handleGetTranscripts,
      }}
    >
      {children}
    </TranscriptsContext.Provider>
  )
}
