'use client'

import React, { useState } from 'react'
import Spinner from './Spinner'
import { useRouter } from 'next/navigation'

export default function MetaMaskLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (!window.ethereum) {
      alert('Please install MetaMask for Login')
      setIsLoading(false)
      return
    } else {
      try {
        console.log('Metamask detected')
        const accounts = await window.ethereum.request<string[]>({ method: 'eth_requestAccounts' })
        if (accounts && accounts[0]) {
          sessionStorage.setItem('meta-account', accounts[0])
          router.push('/user/dashboard')
        }
      } catch (ex) {
        alert('Access Denied')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div>
      <button className="btn btn-meta flex justify-center items-center gap-2" onClick={onLoginClick}>
        {isLoading && <Spinner />}
        <span>Login with MetaMask</span>
      </button>
    </div>
  )
}
