export type MP = {
  id: string
  firstLastName: string
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
  data: any[]
  itemsPerPage: number
  setCurrentData: (data: any[]) => void
}

export type DrawerComponentProps = {
  window?: () => Window
  setIsClosing: (isClosing: boolean) => void
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}
