import { Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { MP } from "../types/MPType"

export type MPCardComponentProps = {
  item: MP
}

export default function MPCardComponent({ item }: MPCardComponentProps) {
  return (
    <Link href="/">
      <div style={{ position: "relative" }}>
        <Image
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${item.id}/photo`}
          alt={`Zdjęcie ${item.firstLastName}`}
          loading="lazy"
          width={60}
          height={75}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />

        <Typography
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0,0,0,.5)",
            color: "white",
            padding: "10px",
            transition: "background 0.3s ease",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.7)",
              color: "lightgrey",
            },
          }}
          variant="body2"
        >
          {item.firstLastName}
        </Typography>
      </div>
    </Link>
  )
}
