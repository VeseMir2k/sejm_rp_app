"use client"

import { useEffect } from "react"
import { useAppBar } from "../context/AppBarContext"

export default function Committees() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Komisje")
  }, [changeTitleAppBar])

  return <h2>Committees</h2>
}
