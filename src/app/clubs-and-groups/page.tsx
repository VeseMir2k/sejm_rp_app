"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/TopAppBar"

export default function Page() {
  const { changeTitle } = useTopAppBar()

  useEffect(() => {
    changeTitle("Kluby i koła")
  }, [changeTitle])

  return <h2>Clubs and groups</h2>
}
