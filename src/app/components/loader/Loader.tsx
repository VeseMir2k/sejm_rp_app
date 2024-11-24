import { Box, CircularProgress } from "@mui/material"

export default function Loader() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  )
}
