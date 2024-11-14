"use client"

import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useState } from "react"
import AppBarComponent from "./components/AppBarComponent"
import DrawerComponent from "./components/DrawerComponent"
import AppProvider from "./context"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
          <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBarComponent
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
                <DrawerComponent
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
