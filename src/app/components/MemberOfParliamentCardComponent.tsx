import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MemberOfParliament } from "../types/MemberOfParliament.type"

import { Typography, CircularProgress, Box } from "@mui/material"

export type MemberOfParliamentCardComponentProps = {
  item: MemberOfParliament
}

export default function MemberOfParliamentCardComponent({
  item,
}: MemberOfParliamentCardComponentProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <Link
      href={`/members-of-parliament/member-of-parliament?name=${item.firstLastName}&id=${item.id}`}
      passHref
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          cursor: "pointer",
          backgroundColor: "#333",
        }}
      >
        <Box sx={{ width: "50px", height: "62px", position: "relative" }}>
          {isLoading && (
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "62px",
              }}
            >
              <CircularProgress size={24} />
            </Box>
          )}

          <Image
            src={`https://api.sejm.gov.pl/sejm/term10/MP/${item.id}/photo-mini`}
            alt={`Zdjęcie ${item.firstLastName}`}
            loading="lazy"
            width={50}
            height={62}
            style={{
              objectFit: "cover",
              visibility: isLoading ? "hidden" : "visible",
            }}
            onLoad={handleImageLoad}
          />
        </Box>
        <Typography
          variant="caption"
          sx={{
            width: "100%",
            color: "white",
            padding: "8px",
          }}
        >
          {item.firstLastName}
        </Typography>
      </Box>
    </Link>
  )
}