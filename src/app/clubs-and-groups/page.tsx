"use client"

import { useEffect } from "react"
import { useAppBar } from "../context/appBar/AppBarContext"

export default function Page() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Kluby i koła")
  }, [changeTitleAppBar])

  return <h2>Clubs and groups</h2>
}
