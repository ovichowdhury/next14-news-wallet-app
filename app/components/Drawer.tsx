/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'

type DrawerProps = {
  children: React.ReactNode
}

export default function Drawer({ children }: DrawerProps) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="flex">
      {/** Sidebar section */}
      <div
        className={`relative min-h-screen bg-gray-200 dark:bg-gray-700 border-r-2 border-r-gray-200 dark:border-r-gray-500 ${
          open ? 'w-full' : 'w-0 border-none'
        } duration-300 pt-2`}
      >
        {/**Control button */}
        <img
          src="/img/control.png"
          alt="Control"
          className={`absolute cursor-pointer z-40 w-7 min-w-7 border-2 border-orange-600 top-9 rounded-full ${
            !open && 'rotate-180'
          }`}
          onClick={toggleOpen}
        />

        {/** Header */}

        {/** Content */}
      </div>
      {/** Right Panel */}
      <div className="flex-1 relative overflow-x-hidden">{children}</div>
    </div>
  )
}
