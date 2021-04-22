import React from "react"
import { SearchIcon } from "../Icons"
import CloseButton from "./CloseButton"

const SearchInput = () => {
  return (
    <div className="flex items-center justify-between space-x-3">
      <SearchIcon />
      <input
        className="w-full p-2 focus:outline-none text-lg dark:bg-gray-900 dark:text-gray-100 outline-none"
        type="text"
        placeholder="Search for words, books, authors..."
      />
      <CloseButton />
    </div>
  )
}

export default SearchInput
