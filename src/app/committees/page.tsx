"use client"

import { useEffect } from "react"
import { useTopAppBar } from "../context/TopAppBar"

export default function Page() {
  const { changeTitle } = useTopAppBar()

  useEffect(() => {
    changeTitle("Komisje")
  }, [changeTitle])

  return <h2>Committees</h2>
}
