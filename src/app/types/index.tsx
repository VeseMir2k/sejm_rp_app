export type MP = {
  id: string
  firstLastName: string
  club: string
}

export type Club = {
  email: string
  fax: string
  id: string
  membersCount: number
  name: string
  phone: string
}
export type Proceeding = {
  dates: string[]
  number: number
  title: string
}

export type AppBarComponentProps = {
  isClosing: boolean
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}
export type MPCardComponentProps = {
  item: MP
}

export type PaginationComponentProps = {
  data: MP[]
  itemsPerPage: number
  setCurrentData: (data: MP[]) => void
}

export type DrawerComponentProps = {
  window?: () => Window
  setIsClosing: (isClosing: boolean) => void
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}
