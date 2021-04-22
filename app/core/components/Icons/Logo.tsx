import React from "react"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <a className="cursor-pointer flex items-center justify-center py-3">
        <span role="img" aria-label="cheat sheet emoji" className="text-2xl pr-2">
          📝
        </span>
        <p className="font-medium whitespace-nowrap text-xl text-gray-600 dark:text-gray-100">
          Gimme cheats
        </p>
      </a>
    </Link>
  )
}

export default Logo
