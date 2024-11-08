import { Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

// type MPCardComponentProps = {

// }

export default function MPCardComponent({ item }) {
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
          sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
          variant="body1"
        >
          {item.firstLastName}
        </Typography>
      </div>
    </Link>
  )
}
