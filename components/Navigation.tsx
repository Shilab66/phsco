import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold-400">
          PHSCO
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/logistics" className="hover:text-gold-400 transition-colors">
              Logistics
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gold-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-gold-400 transition-colors">
              Register
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:text-gold-400 transition-colors">
              Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
