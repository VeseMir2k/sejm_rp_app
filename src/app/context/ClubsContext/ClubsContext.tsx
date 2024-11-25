import { createContext } from "react"
import { TClubsContext } from "./ClubsContext.type"

export const ClubsContext = createContext<TClubsContext | null>(null)
