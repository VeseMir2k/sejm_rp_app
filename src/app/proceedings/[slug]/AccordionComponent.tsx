"use client"

import { useEffect, useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

type TranscriptStatement = {
  name: string
}

type AccordionComponentProps = {
  date: string
  slug: string | undefined
}

export default function AccordionComponent({
  date,
  slug,
}: AccordionComponentProps) {
  const [TranscriptsListData, setTranscriptsListData] = useState<{
    statements: TranscriptStatement[]
  } | null>(null)
  const [isLoadingTranscriptsList, setIsLoadingTranscriptsList] = useState(true)

  useEffect(() => {
    const fetchTranscriptsData = async () => {
      setIsLoadingTranscriptsList(true)
      try {
        const response = await fetch(
          `https://api.sejm.gov.pl/sejm/term10/proceedings/${slug}/${date}/transcripts`
        )
        if (!response.ok) {
          throw new Error("Error fetching transcripts")
        }
        const data = await response.json()
        setTranscriptsListData(data)
      } catch (error) {
        console.error("Failed to fetch transcripts:", error)
      } finally {
        setIsLoadingTranscriptsList(false)
      }
    }

    if (slug) {
      fetchTranscriptsData()
    }
  }, [slug, date])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isLoadingTranscriptsList ? (
          <Typography variant="body2">Loading...</Typography>
        ) : TranscriptsListData?.statements ? (
          TranscriptsListData.statements.map((item, index) => (
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
