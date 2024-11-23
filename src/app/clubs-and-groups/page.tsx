"use client"
import { useAppBar } from "../context/AppBarContext"
import { useEffect } from "react"

export default function ClubsAndGroups() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Kluby i koła")
  }, [changeTitleAppBar])

  return <h2>Clubs and groups</h2>
}
