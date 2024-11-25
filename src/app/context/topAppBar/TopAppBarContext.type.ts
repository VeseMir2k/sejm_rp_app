export type TTopAppBarProps = {
  children: React.ReactNode
}
export type TTopAppBarContext = {
  title: string
  changeTitle: (title: string) => void
}
