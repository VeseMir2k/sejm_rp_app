"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AppDrawerProps } from "./AppDrawer.type"

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material"

export default function AppDrawer({
  window,
  setIsClosing,
  setMobileOpen,
  mobileOpen,
  drawerWidth,
}: AppDrawerProps) {
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
    { name: "Obrady", href: "/proceedings" },
  ]

  const drawer = (
    <>
      <Toolbar />
      <List>
        {menu.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)
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
