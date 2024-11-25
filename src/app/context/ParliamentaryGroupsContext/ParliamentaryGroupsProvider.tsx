import { useState, useCallback } from "react"
import { getParliamentaryGroups } from "@/app/api/getParliamentaryGroups"
import { TParliamentaryGroup } from "@/app/types/ParliamentaryGroup.type"
import { TParliamentaryGroupsProviderProps } from "./ParliamentaryGroupsContext.type"
import { ParliamentaryGroupsContext } from "./ParliamentaryGroupsContext"

export const ParliamentaryGroupsProvider = ({
  children,
}: TParliamentaryGroupsProviderProps) => {
  const [parliamentaryGroups, setParliamentaryGroups] = useState<
    TParliamentaryGroup[]
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleGetParliamentaryGroups = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getParliamentaryGroups()
      setParliamentaryGroups(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ParliamentaryGroupsContext.Provider
      value={{ parliamentaryGroups, isLoading, handleGetParliamentaryGroups }}
    >
      {children}
    </ParliamentaryGroupsContext.Provider>
  )
}
