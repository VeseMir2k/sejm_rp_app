"use client"
import { useEffect, useState } from "react"
import { Stack, Pagination, PaginationItem } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

type PaginationComponentProps = {
  data: any[]
  itemsPerPage: number
  setCurrentData: (data: any[]) => void
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
  }, [setCurrentData, currentPage])

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page)
  }

  return (
    <Stack
      spacing={2}
      mt={2}
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
