'use client'

import animation from '@/public/animation_ln8irneu.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function LottiePlayer() {
  return <Lottie animationData={animation} className="flex w-full h-screen justify-center items-center" loop={true} />
}
