"use client"

import { useTranscripts } from "@/app/context/Transcripts"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

export default function ProceedingTable() {
  const { transcripts } = useTranscripts()

  const formatTime = (dateTime: string) => {
    if (dateTime) {
      const date = new Date(dateTime)
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      }
      return date.toLocaleString("pl-PL", options)
    } else {
      return
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Funkcja</TableCell>
            <TableCell>Początek</TableCell>
            <TableCell>Koniec</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transcripts?.statements.map((statement) => (
            <TableRow key={statement.num} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {statement.name}
              </TableCell>
              <TableCell>{statement.function}</TableCell>
              <TableCell>{formatTime(statement.startDateTime)}</TableCell>
              <TableCell>{formatTime(statement.endDateTime)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
