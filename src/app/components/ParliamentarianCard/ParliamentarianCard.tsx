import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Typography, CircularProgress, Box } from "@mui/material"
import { ParliamentarianCardProps } from "./ParliamentarianCard.type"

const styles = {
  link: {
    display: "block",
    textDecoration: "none",
    height: "100%",
  },
  card: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#222",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      "& .image-card": {
        transform: "scale(1.05)",
      },
    },
  },
  imageWrapper: {
    position: "relative",
  },
  loader: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  text: {
    width: "100%",
    color: "white",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
  },
} as const

export default function ParliamentarianCard({
  item,
  selectedClub,
}: ParliamentarianCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <Link
      href={`/parliamentarians/parliamentarian?name=${item.firstLastName}&id=${item.id}`}
      style={styles.link}
    >
      <Box sx={styles.card}>
        <Box sx={styles.imageWrapper}>
          {isLoading && !hasError && (
            <Box sx={styles.loader}>
              <CircularProgress size={24} />
            </Box>
          )}

          <Image
            src={`https://api.sejm.gov.pl/sejm/term10/MP/${item.id}/photo-mini`}
            alt={`Zdjęcie ${item.firstLastName}`}
            loading="lazy"
            width={50}
            height={62}
            className="image-card"
            style={{
              ...styles.image,
              visibility: isLoading ? "hidden" : "visible",
            }}
            onLoad={() => {
              setIsLoading(false)
              setHasError(false)
            }}
            onError={() => {
              setIsLoading(false)
              setHasError(true)
            }}
            unoptimized={true}
          />
        </Box>
        <Typography
          variant="caption"
          textAlign="center"
          sx={styles.text}
        >
          <span>{item.firstLastName}</span>
          <span>{selectedClub === "All" && `(${item.club})`}</span>
        </Typography>
      </Box>
    </Link>
  )
}
