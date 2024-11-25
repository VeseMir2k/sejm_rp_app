import { Box, CircularProgress } from "@mui/material"

const styles = {
  loader: {
    width: "100%",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
}

export default function Loader() {
  return (
    <Box sx={styles.loader}>
      <CircularProgress color="inherit" />
    </Box>
  )
}
