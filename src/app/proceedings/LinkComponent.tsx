import Link from "next/link"

import { Button } from "@mui/material"

type LinkComponentProps = {
  date: string
  proceedingNumber: number
}

export default function LinkComponent({
  date,
  proceedingNumber,
}: LinkComponentProps) {
  return (
    <Link href={`/proceedings/proceeding?id=${proceedingNumber}&date=${date}`}>
      <Button
        variant="outlined"
        color="primary"
      >
        {date}
      </Button>
    </Link>
  )
}
