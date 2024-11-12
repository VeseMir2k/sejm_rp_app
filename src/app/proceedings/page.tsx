"use client"
import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"

export default function Proceedings() {
  const { setTitle } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData } = useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    setTitle("Obrady")
  }, [setTitle, ProceedingsFetchData])

  return (
    <>
      <h2>Proceedings</h2>
      {ProceedingsData.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </>
  )
}
