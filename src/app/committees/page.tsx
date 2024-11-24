"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/topAppBar/TopAppBarContext"

export default function Page() {
  const { changeTitleTopAppBar } = useTopAppBar()

  useEffect(() => {
    changeTitleTopAppBar("Komisje")
  }, [changeTitleTopAppBar])

  return <h2>Committees</h2>
}
