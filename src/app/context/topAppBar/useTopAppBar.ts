import { useContext } from "react"
import { TopAppBarContext } from "./TopAppBarContext"

export function useTopAppBar() {
  const context = useContext(TopAppBarContext)
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider")
  }
  return context
}
