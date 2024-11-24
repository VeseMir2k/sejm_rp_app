"use client"

import { useEffect } from "react"
import { useAppBar } from "../context/appBar/AppBarContext"

export default function Page() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Komisje")
  }, [changeTitleAppBar])

  return <h2>Committees</h2>
}
