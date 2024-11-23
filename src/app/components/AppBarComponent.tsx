import { useAppBar } from "../context/AppBarContext"

import { AppBar, IconButton, Typography, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

type AppBarComponentProps = {
  isClosing: boolean
  setMobileOpen: (mobileOpen: boolean) => void
  mobileOpen: boolean
  drawerWidth: number
}

export default function AppBarComponent({
  isClosing,
  setMobileOpen,
  mobileOpen,
  drawerWidth,
}: AppBarComponentProps) {
  const { title } = useAppBar()

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
