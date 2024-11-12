//! MP
export type MP = {
  accusativeName: string
  active: boolean
  birthDate: string
  birthLocation: string
  club: string
  districtName: string
  districtNum: number
  educationLevel: string
  email: string
  firstLastName: string
  firstName: string
  genitiveName: string
  id: number
  lastFirstName: string
  lastName: string
  numberOfVotes: number
  profession: string
  secondName: string
  voivodeship: string
}

//! Club
export type Club = {
  email: string
  fax: string
  id: string
  membersCount: number
  name: string
  phone: string
}

//! Proceeding
export type Proceeding = {
  dates: string[]
  number: number
  title: string
}

//! AppBarComponentProps
export type AppBarComponentProps = {
  isClosing: boolean
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}

//! MPCardComponentProps
export type MPCardComponentProps = {
  item: MP
}

//! PaginationComponentProps
export type PaginationComponentProps = {
  data: MP[]
  itemsPerPage: number
  setCurrentData: (data: MP[]) => void
}

//! DrawerComponentProps
export type DrawerComponentProps = {
  window?: () => Window
  setIsClosing: (isClosing: boolean) => void
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}
