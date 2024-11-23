import React, { createContext, useContext, ReactNode } from "react"

type AppBarType = {
  title: string
  changeTitleAppBar: (title: string) => void
}

const AppBarContext = createContext<AppBarType | undefined>(undefined)

type AppBarProps = {
  children: ReactNode
}

export default function AppBarProvider({ children }: AppBarProps) {
  const [title, setTitle] = React.useState<string>("")

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
