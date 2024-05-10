'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

enum VerificationStatus {
  'P',
  'A',
  'R',
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>(VerificationStatus.P)

  useEffect(() => {
    const token = sessionStorage.getItem('meta-account')
    if (token) {
      setVerificationStatus(VerificationStatus.A)
    } else setVerificationStatus(VerificationStatus.R)
  }, [])

  if (verificationStatus === VerificationStatus.P)
    return (
      <div className="flex justify-center items-center p-4">
        <Spinner />
      </div>
    )
  if (verificationStatus === VerificationStatus.R)
    return (
      <>
        {(() => {
          localStorage.clear()
          router.push('/')
        })()}
      </>
    )
  return <>{children}</>
}
