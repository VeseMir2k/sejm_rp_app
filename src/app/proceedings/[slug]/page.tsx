"use client"

import { useAppBar } from "@/app/context/AppBarContext"
import { useEffect } from "react"

type ProceedingPost = {
  params: { slug: string }
}

export default function Proceeding({}: ProceedingPost) {
  const { setTitle } = useAppBar()

  useEffect(() => {
    setTitle("hej")
  }, [setTitle])

  return <div>My Post: dsads</div>
}
