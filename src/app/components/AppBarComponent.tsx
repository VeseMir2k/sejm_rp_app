import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"

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
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}