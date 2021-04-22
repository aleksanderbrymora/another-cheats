import React, { Suspense } from "react"
import Logo from "../Icons/Logo"
import SearchBar from "./SearchBar"
import AuthButtons from "./AuthButtons"

const Navbar = () => {
  return (
    <div className="sticky w-full mx-auto flex justify-between py-2">
      <Logo />
      <div className="flex justify-between items-center w-full border-b border-gray-200 h-16 dark:border-gray-400">
        <SearchBar />
        <Suspense fallback="Loading...">
          <AuthButtons />
        </Suspense>
      </div>
    </div>
  )
}

export default Navbar
