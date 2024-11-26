import Link from "next/link"
import { ProceedingLinkProps } from "./ProceedingLink.type"
import { Button } from "@mui/material"

export default function ProceedingLink({ date, proceedingNumber }: ProceedingLinkProps) {
  return (
    <Link href={`/proceedings/proceeding?id=${proceedingNumber}&date=${date}`}>
      <Button variant="outlined" color="primary">
        {date}
      </Button>
    </Link>
  )
}
