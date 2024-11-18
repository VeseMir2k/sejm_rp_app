"use client"

import { useTranscriptsList } from "@/app/context/TranscriptsListContext"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

export default function ProceedingTableComponent() {
  const { TranscriptsListData } = useTranscriptsList()

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
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Funkcja</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TranscriptsListData?.statements.map((item) => (
            <TableRow
              key={item.num}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
              >
                {item.name}
              </TableCell>
              <TableCell>{item.function}</TableCell>
              <TableCell>{formatTime(item.startDateTime)}</TableCell>
              <TableCell>{formatTime(item.endDateTime)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
