import React from 'react'
import AuthProvider from '@/app/components/AuthProvider'
import Drawer from '@/app/components/Drawer'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <Drawer>{children}</Drawer>
    </AuthProvider>
  )
}
