import * as React from "react"
import Typography from "@mui/material/Typography"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material"
import LinkComponent from "./LinkComponent"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

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
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
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
          {proceeding.dates.map((item, index) => {
            return (
              <LinkComponent
                key={`link_${index}`}
                date={item}
                proceedingNumber={proceeding.number}
              />
            )
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
