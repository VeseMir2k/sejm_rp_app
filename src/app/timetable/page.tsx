"use client"
import { useAppBar } from "../context/AppBarContext"
import { useEffect } from "react"

export default function Timetable() {
  const { setTitle } = useAppBar()

  useEffect(() => {
    setTitle("Terminarz")
  }, [])

  return <h2>Timetable</h2>
}
