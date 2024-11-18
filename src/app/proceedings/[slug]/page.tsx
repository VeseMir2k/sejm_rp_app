"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useTranscriptsList } from "@/app/context/TranscriptsListContext"
import { useAppBar } from "@/app/context/AppBarContext"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

export default function Proceeding() {
  const params = useParams()

  const { setTitle } = useAppBar()
  const { TranscriptsListFetchData, TranscriptsListData } = useTranscriptsList()

  useEffect(() => {
    if (typeof params.slug === "string") {
      const result = params.slug.trim().split("_")
      setTitle(`Posiedzenie ${result[0]} dnia ${result[1]}`)
      TranscriptsListFetchData(result[0], result[1])
    } else {
      console.log("Slug is not a string or is undefined:", params.slug)
    }
  }, [params.slug])

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
              <TableCell>{item.startDateTime}</TableCell>
              <TableCell>{item.endDateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
