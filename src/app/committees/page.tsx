"use client"
import { useAppBar } from "../context/AppBarContext"
import { useEffect } from "react"

export default function Committees() {
  const { changeTitleAppBar } = useAppBar()

  useEffect(() => {
    changeTitleAppBar("Komisje")
  }, [changeTitleAppBar])

  return <h2>Committees</h2>
}
