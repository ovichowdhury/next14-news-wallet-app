'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoHomeOutline } from 'react-icons/io5'
import { VerificationStatus } from './AuthProvider'

export default function NavItemWithAuth() {
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>(VerificationStatus.P)

  useEffect(() => {
    const token = sessionStorage.getItem('meta-account')
    if (token) {
      setVerificationStatus(VerificationStatus.A)
    } else setVerificationStatus(VerificationStatus.R)
  }, [])

  if (verificationStatus === VerificationStatus.P) return <></>
  if (verificationStatus === VerificationStatus.R) return <></>
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/user/news" className="flex justify-center items-center gap-1 hover:text-orange-600">
        <IoHomeOutline />
        Home
      </Link>
      <Link href="/user/about" className="flex justify-center items-center gap-1 hover:text-orange-600">
        <CgProfile />
        About
      </Link>
    </div>
  )
}
