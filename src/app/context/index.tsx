import MPsProvider from "./membersOfParliament/MembersOfParliamentContext"
import AppBarProvider from "./topAppBar/TopAppBarContext"
import ClubsProvider from "./clubs/ClubsContext"
import ProceedingsProvider from "./proceedings/ProceedingsContext"
import TranscriptsListProvider from "./transcriptsList/TranscriptsListContext"

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
