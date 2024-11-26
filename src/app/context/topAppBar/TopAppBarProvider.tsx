import { useState } from "react"
import { TTopAppBarProps } from "./TopAppBarContext.type"
import { TopAppBarContext } from "./TopAppBarContext"

export const TopAppBarProvider = ({ children }: TTopAppBarProps) => {
  const [title, setTitle] = useState<string>("")

  const changeTitle = (title: string) => {
    setTitle(title)
  }

  return <TopAppBarContext.Provider value={{ title, changeTitle }}>{children}</TopAppBarContext.Provider>
}
