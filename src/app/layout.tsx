"use client"

import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useState } from "react"
import TopAppBar from "./components/TopAppBar/TopAppBar"
import AppDrawer from "./components/AppDrawer/AppDrawer"
import AppProvider from "./context"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 640,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
})

const drawerWidth = 240

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <TopAppBar
                drawerWidth={drawerWidth}
                isClosing={isClosing}
                setMobileOpen={setMobileOpen}
                mobileOpen={mobileOpen}
              />
              <Box
                component="nav"
                sx={{
                  width: { sm: drawerWidth },
                  flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders"
              >
                <AppDrawer
                  setIsClosing={setIsClosing}
                  setMobileOpen={setMobileOpen}
                  mobileOpen={mobileOpen}
                  drawerWidth={drawerWidth}
                />
              </Box>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
              >
                <Toolbar />
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
