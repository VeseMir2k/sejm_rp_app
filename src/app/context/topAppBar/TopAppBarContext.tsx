import { createContext } from "react"
import { TTopAppBarContext } from "./TopAppBarContext.type"

export const TopAppBarContext = createContext<TTopAppBarContext | null>(null)
