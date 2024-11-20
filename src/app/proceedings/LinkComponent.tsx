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
    <Link
      key={date}
      href={`/proceedings/${proceedingNumber}_${date}`}
    >
      <Button variant="outlined">{date}</Button>
    </Link>
  )
}
