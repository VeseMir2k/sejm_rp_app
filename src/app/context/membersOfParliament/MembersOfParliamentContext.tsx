import { createContext, useContext, useState, useCallback } from "react"
import { MemberOfParliament } from "../../types/MemberOfParliament.type"
import { fetchMPs } from "../../api/fetchMPs"
import {
  MembersOfParliamentContextType,
  MembersOfParliamentPropsType,
} from "./MembersOfParliamentContext.type"

const MembersOfParliamentContext = createContext<
  MembersOfParliamentContextType | undefined
>(undefined)

export default function MPsProvider({
  children,
}: MembersOfParliamentPropsType) {
  const [MembersOfParliamentData, setMembersOfParliamentData] = useState<
    MemberOfParliament[] | null
  >(null)
  const [isLoadingMembersOfParliament, setIsLoadingMembersOfParliament] =
    useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const MembersOfParliamentFetchData = useCallback(async () => {
    setIsLoadingMembersOfParliament(true)
    setError(null)
    try {
      const data = await fetchMPs()
      setMembersOfParliamentData(data)
    } catch (err) {
      console.error("Error fetching MPs data:", err)
      setError("Nie udało się załadować danych posłów.")
    } finally {
      setIsLoadingMembersOfParliament(false)
    }
  }, [])

  return (
    <MembersOfParliamentContext.Provider
      value={{
        MembersOfParliamentData,
        isLoadingMembersOfParliament,
        error,
        MembersOfParliamentFetchData,
      }}
    >
      {children}
    </MembersOfParliamentContext.Provider>
  )
}

export function useMembersOfParliament() {
  const context = useContext(MembersOfParliamentContext)
  if (!context) {
    throw new Error("useMPs must be used within a MPsProvider")
  }
  return context
}
