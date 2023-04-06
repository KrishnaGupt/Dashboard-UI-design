"use client"

import Central from "@/components/Central"
import Left from "@/components/Left"
import Right from "@/components/Right"

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center bg-black p-10">
      <Left/>
      <Central/>
      <Right/>
    </div>
  )
}