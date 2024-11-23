"use client"

import { useEffect } from "react"
import { useAppBar } from "../context/AppBarContext"

export default function ClubsAndGroups() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Kluby i koła")
  }, [changeTitleAppBar])

  return <h2>Clubs and groups</h2>
}
