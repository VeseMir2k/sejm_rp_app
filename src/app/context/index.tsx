import MPsProvider from "./MPsContext"
import AppBarProvider from "./AppBarContext"
import ClubsProvider from "./ClubsContext"
import ProceedingsProvider from "./ProceedingsContext"
import ProceedingProvider from "./ProceedingContext"
import { TranscriptsListProvider } from "./TranscriptsListContext"

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <MPsProvider>
      <ClubsProvider>
        <ProceedingsProvider>
          <ProceedingProvider>
            <TranscriptsListProvider>
              <AppBarProvider>{children}</AppBarProvider>
            </TranscriptsListProvider>
          </ProceedingProvider>
        </ProceedingsProvider>
      </ClubsProvider>
    </MPsProvider>
  )
}
