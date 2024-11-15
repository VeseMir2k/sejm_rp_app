"use client"

import { useEffect } from "react"
import { useTranscriptsList } from "@/app/context/TranscriptsListContext"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

type AccordionComponentProps = {
  date: string
  slug: string | undefined
}

export default function AccordionComponent({
  date,
  slug,
}: AccordionComponentProps) {
  const { transcriptsState, fetchTranscriptsData } = useTranscriptsList()
  const key = `${slug}-${date}`
  const transcript = transcriptsState[key] || { data: null, isLoading: false }

  useEffect(() => {
    if (slug && !transcriptsState[key]) {
      fetchTranscriptsData(slug, date)
    }
  }, [slug, date, key, fetchTranscriptsData, transcriptsState])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls={`panel-${date}-content`}
        id={`panel-${date}-header`}
      >
        <Typography>{date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {transcript.isLoading ? (
          <Typography variant="body2">Loading...</Typography>
        ) : transcript.data?.statements?.length ? (
          transcript.data.statements.map((item, index) => (
            <div key={index}>
              <Typography variant="body2">Name: {item.name}</Typography>
            </div>
          ))
        ) : (
          <Typography variant="body2">No transcripts available.</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
