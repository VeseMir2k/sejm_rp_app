"use client"

import { useEffect, useState } from "react"
import { DataPaginationProps } from "./DataPagination.type"
import { Stack, Pagination, PaginationItem } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const styles = {
  pagination: {
    justifyContent: "center",
    alignItems: "center",
  },
}

export default function DataPagination({
  data,
  itemsPerPage,
  setCurrentData,
}: DataPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage

  useEffect(() => {
    setCurrentData(data.slice(startIdx, endIdx))
  }, [setCurrentData, currentPage, data, startIdx, endIdx])

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page)
  }

  return (
    <Stack
      mt={2}
      direction="row"
      spacing={2}
      sx={styles.pagination}
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
