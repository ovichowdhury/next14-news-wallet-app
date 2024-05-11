import React from 'react'
import AuthProvider from '@/app/components/AuthProvider'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthProvider>{children}</AuthProvider>
}
