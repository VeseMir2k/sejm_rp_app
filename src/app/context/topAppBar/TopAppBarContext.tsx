import { createContext, useState, useContext } from "react"
import {
  TopAppBarContextType,
  TopAppBarPropsType,
} from "./TopAppBarContext.type"

const TopAppBarContext = createContext<TopAppBarContextType | undefined>(
  undefined
)

export default function AppBarProvider({ children }: TopAppBarPropsType) {
  const [title, setTitle] = useState<string>("")

  const changeTitleTopAppBar = (title: string) => {
    setTitle(title)
  }

  return (
    <TopAppBarContext.Provider value={{ title, changeTitleTopAppBar }}>
      {children}
    </TopAppBarContext.Provider>
  )
}

export function useTopAppBar() {
  const context = useContext(TopAppBarContext)
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider")
  }
  return context
}
