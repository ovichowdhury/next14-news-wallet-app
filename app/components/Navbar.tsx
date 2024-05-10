import Link from 'next/link'
import CustomThemeSwitcher from './CustomThemeSwitcher'

const Navbar = () => {
  return (
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-3xl text-gray-900 dark:text-white">
          <Link href="https://news-wallet-app.vercel.com">News Wallet App</Link>
        </h2>
        <div>
          <CustomThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Navbar
