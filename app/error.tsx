'use client'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col justify-center items-center p-24">
      <h2>{error.message ?? 'Something went wrong!'}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
