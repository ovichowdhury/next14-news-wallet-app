import React from 'react'
import AuthProvider from '@/app/components/AuthProvider'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthProvider>{children}</AuthProvider>
}
