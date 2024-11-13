import React, { createContext, useContext, ReactNode } from "react"

type AppBarType = {
  title: string
  setTitle: (newTitle: string) => void
}

const AppBarContext = createContext<AppBarType | undefined>(undefined)

type AppBarProps = {
  children: ReactNode
}

export default function AppBarProvider({ children }: AppBarProps) {
  const [title, setTitle] = React.useState<string>("")

  return (
    <AppBarContext.Provider value={{ title, setTitle }}>
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
