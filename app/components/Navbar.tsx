import Link from 'next/link'
import CustomThemeSwitcher from './CustomThemeSwitcher'
import { SiApplenews } from 'react-icons/si'

const Navbar = () => {
  return (
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="flex gap-2 items-center font-bold text-3xl text-gray-900 dark:text-white">
          <SiApplenews />
          <Link href="https://news-wallet-app.vercel.com">News Wallet</Link>
        </h2>
        <div>
          <CustomThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Navbar
