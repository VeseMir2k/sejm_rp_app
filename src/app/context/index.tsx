import MPsProvider from "./MPsContext"
import AppBarProvider from "./AppBarContext"
import ClubsProvider from "./ClubsContext"
import ProceedingsProvider from "./ProceedingsContext"
import TranscriptsListProvider from "./TranscriptsListContext"

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <MPsProvider>
      <ClubsProvider>
        <ProceedingsProvider>
          <TranscriptsListProvider>
            <AppBarProvider>{children}</AppBarProvider>
          </TranscriptsListProvider>
        </ProceedingsProvider>
      </ClubsProvider>
    </MPsProvider>
  )
}
