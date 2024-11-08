"use client"
import { useAppBar } from "../context/AppBarContext"
import { useEffect } from "react"

export default function ClubsAndGroups() {
  const { setTitle } = useAppBar()

  useEffect(() => {
    setTitle("Kluby i koła")
  }, [])

  return <h2>Clubs and groups</h2>
}
