import { MembersOfParliamentProvider } from "./MembersOfParliament"
import { TopAppBarProvider } from "./TopAppBar"
import { ProceedingsProvider } from "./Proceedings"
import { TranscriptsProvider } from "./Transcripts"
import { ClubsProvider } from "./ClubsContext"
type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <MembersOfParliamentProvider>
      <ClubsProvider>
        <ProceedingsProvider>
          <TranscriptsProvider>
            <TopAppBarProvider>{children}</TopAppBarProvider>
          </TranscriptsProvider>
        </ProceedingsProvider>
      </ClubsProvider>
    </MembersOfParliamentProvider>
  )
}
