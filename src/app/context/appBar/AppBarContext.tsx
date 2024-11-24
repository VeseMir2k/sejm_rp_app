import { createContext, useState, useContext } from "react"
import { AppBarContextType, AppBarPropsType } from "./AppBarContext.type"

const AppBarContext = createContext<AppBarContextType | undefined>(undefined)

export default function AppBarProvider({ children }: AppBarPropsType) {
  const [title, setTitle] = useState<string>("")

  const changeTitleAppBar = (title: string) => {
    setTitle(title)
  }

  return (
    <AppBarContext.Provider value={{ title, changeTitleAppBar }}>
      {children}
    </AppBarContext.Provider>
  )
}

export function useAppBar() {
  const context = useContext(AppBarContext)
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider")
  }
  return context
}
