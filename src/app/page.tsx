"use client"

import { useEffect } from "react"
import { useTopAppBar } from "./context/TopAppBar"

export default function Home() {
  const { changeTitle } = useTopAppBar()

  useEffect(() => {
    changeTitle("Strona główna")
  }, [changeTitle])

  return <h2>Home</h2>
}
