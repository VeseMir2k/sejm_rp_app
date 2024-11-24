"use client"

import { useEffect } from "react"
import { useTopAppBar } from "./context/topAppBar/TopAppBarContext"

export default function Home() {
  const { changeTitleTopAppBar } = useTopAppBar()

  useEffect(() => {
    changeTitleTopAppBar("Strona główna")
  }, [changeTitleTopAppBar])

  return <h2>Home</h2>
}
