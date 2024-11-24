"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/topAppBar/TopAppBarContext"

export default function Page() {
  const { changeTitleTopAppBar } = useTopAppBar()

  useEffect(() => {
    changeTitleTopAppBar("Kluby i koła")
  }, [changeTitleTopAppBar])

  return <h2>Clubs and groups</h2>
}
