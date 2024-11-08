"use client"

import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DrawerComponentProps } from "../types"

export default function DrawerComponent({
  window,
  setIsClosing,
  setMobileOpen,
  mobileOpen,
  drawerWidth,
}: DrawerComponentProps) {
  const pathname = usePathname()

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  const menu = [
    { name: "Strona główna", href: "/" },
    { name: "Kluby i koła", href: "/clubs-and-groups" },
    { name: "Posłowie", href: "/members-of-parliament" },
    { name: "Komisje", href: "/committees" },
    { name: "Terminarz", href: "/timetable" },
  ]

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {menu.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              style={{ color: "white", textDecoration: "none" }}
              key={item.name}
              href={item.href}
              passHref
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.2)"
                      : "inherit",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </>
  )

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  )
}
