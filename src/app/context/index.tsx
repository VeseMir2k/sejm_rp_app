import { ParliamentariansProvider } from "./Parliamentarians"
import { TopAppBarProvider } from "./TopAppBar"
import { ProceedingsProvider } from "./Proceedings"
import { TranscriptsProvider } from "./Transcripts"
import { ParliamentaryGroupsProvider } from "./ParliamentaryGroupsContext"

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ParliamentariansProvider>
      <ParliamentaryGroupsProvider>
        <ProceedingsProvider>
          <TranscriptsProvider>
            <TopAppBarProvider>{children}</TopAppBarProvider>
          </TranscriptsProvider>
        </ProceedingsProvider>
      </ParliamentaryGroupsProvider>
    </ParliamentariansProvider>
  )
}
