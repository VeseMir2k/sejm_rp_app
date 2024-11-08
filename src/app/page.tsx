"use client"
import { useAppBar } from "./context/AppBarContext"
import { useEffect } from "react"

export default function Home() {
  const { setTitle } = useAppBar()

  useEffect(() => {
    setTitle("Strona główna")
  }, [])

  return <h2>Home</h2>
}
