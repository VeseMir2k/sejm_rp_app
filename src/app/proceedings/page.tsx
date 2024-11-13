"use client"

import { useAppBar } from "../context/AppBarContext"
import { useProceedings } from "../context/ProceedingsContext"
import { useEffect } from "react"
import Link from "next/link"

export default function Proceedings() {
  const { setTitle } = useAppBar()
  const { ProceedingsFetchData, ProceedingsData } = useProceedings()

  useEffect(() => {
    ProceedingsFetchData()
    setTitle("Obrady")
  }, [setTitle, ProceedingsFetchData])

  return (
    <>
      {ProceedingsData.map((item) => (
        <Link
          key={item.title}
          href={`/proceedings/${item.number}`}
        >
          <h4 style={{ color: "white" }}>{item.title}</h4>
        </Link>
      ))}
    </>
  )
}
