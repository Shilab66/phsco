import Link from "next/link"
import { ExternalLink } from "lucide-react"

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold-400 mb-4 md:mb-0">
          PHSCO
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <ul className="flex space-x-4 mb-4 md:mb-0">
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
              <Link href="/rules" className="hover:text-gold-400 transition-colors">
                Rules/FAQ
              </Link>
            </li>
            <li>
              <Link href="/archive" className="hover:text-gold-400 transition-colors">
                Archive
              </Link>
            </li>
          </ul>

          <a
            href="https://forms.gle/HdP28HkeoRZyaCVb7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gold-400 font-bold rounded-lg transition-colors border border-gold-400/30"
          >
            Support <ExternalLink size={16} />
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNG1ff3AOMClKEK3Mjb5_s7bv7g_vWOwWdRv-S6lE-RLPhXA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-lg transition-colors"
          >
            Register Now <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
