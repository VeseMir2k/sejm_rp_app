import { useTopAppBar } from "../../context/TopAppBar"
import { TopAppBarProps } from "./TopAppBar.type"
import { AppBar, IconButton, Typography, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

export default function TopAppBar({
  isClosing,
  setMobileOpen,
  mobileOpen,
  drawerWidth,
}: TopAppBarProps) {
  const { title } = useTopAppBar()

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
