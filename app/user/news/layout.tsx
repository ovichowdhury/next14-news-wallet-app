import React from 'react'
import AuthProvider from '@/app/components/AuthProvider'
import Drawer from '@/app/components/Drawer'
import NewsAdd from './NewsAdd'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <Drawer content={<NewsAdd />}>{children}</Drawer>
    </AuthProvider>
  )
}
