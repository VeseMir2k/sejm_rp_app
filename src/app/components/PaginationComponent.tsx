"use client"

import { useEffect, useState } from "react"
import { MemberOfParliament } from "../types/MemberOfParliament.type"

import { Stack, Pagination, PaginationItem } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

type PaginationComponentProps = {
  data: MemberOfParliament[]
  itemsPerPage: number
  setCurrentData: (data: MemberOfParliament[]) => void
}

export default function PaginationComponent({
  data,
  itemsPerPage,
  setCurrentData,
}: PaginationComponentProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage

  useEffect(() => {
    setCurrentData(data.slice(startIdx, endIdx))
  }, [setCurrentData, currentPage, data, startIdx, endIdx])

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page)
  }

  return (
    <Stack
      mt={2}
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  )
}
