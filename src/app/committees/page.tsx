"use client"
import { useAppBar } from "../context/AppBarContext"
import { useEffect } from "react"

export default function Committees() {
  const { setTitle } = useAppBar()

  useEffect(() => {
    setTitle("Komisje")
  }, [])

  return <h2>Committees</h2>
}
