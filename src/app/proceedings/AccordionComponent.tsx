import * as React from "react"
import Typography from "@mui/material/Typography"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material"
import LinkComponent from "./LinkComponent"

type AccordionComponentProps = {
  proceeding: {
    dates: string[]
    number: number
    title: string
  }
}

export default function AccordionComponent({
  proceeding,
}: AccordionComponentProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{proceeding.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {proceeding.dates.map((item) => {
              return (
                <LinkComponent
                  date={item}
                  proceedingNumber={proceeding.number}
                />
              )
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
