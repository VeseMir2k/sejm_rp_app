"use client"

import { useEffect } from "react"
import { useAppBar } from "./context/appBar/AppBarContext"

export default function Home() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Strona główna")
  }, [changeTitleAppBar])

  return <h2>Home</h2>
}
