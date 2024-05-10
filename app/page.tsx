import MetaMaskLogin from './components/MetaMaskLogin'

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center p-12">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="max-w-3xl text-center font-bold text-gray-900 dark:text-white text-5xl leading-tight">
          Demystifying crypto. News and insights for your crypto journey.
        </h1>
        <p className="text-lg text-center font-medium text-gray-900 dark:text-white">
          All the news you need, delivered daily.
        </p>
        <MetaMaskLogin />
      </div>
    </div>
  )
}
