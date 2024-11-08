import { createContext, useContext, useState, useCallback } from "react"

type MP = {
  id: string
  firstLastName: string
}

type MPsContextType = {
  data: MP[]
  isLoading: boolean
  MPsFetchData: () => void
}

const MPsContext = createContext<MPsContextType | undefined>(undefined)

export default function MPsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [data, setData] = useState<MP[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const MPsFetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP")
      if (!response.ok) {
        throw new Error("Error")
      }
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <MPsContext.Provider value={{ data, isLoading, MPsFetchData }}>
      {children}
    </MPsContext.Provider>
  )
}

export const useMPs = (): MPsContextType => {
  const context = useContext(MPsContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
