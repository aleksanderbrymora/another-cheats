import React from "react"
import { SearchIcon } from "../Icons"
import DisplayKeyCombo from "../DisplayKeyCombo"
import { store } from "app/core/store"
import { observer } from "mobx-react-lite"

const SearchBar = observer(() => {
  const {
    modal: { open },
  } = store

  return (
    <button className="mx-10 w-full leading-6 flex items-center p-2 space-x-3" onClick={open}>
      <SearchIcon />
      <p
        id="search-box"
        className="font-medium text-gray-600 transition-colors duration-200 dark:text-gray-100"
      >
        Quick search for words, books, authors...
      </p>
      <DisplayKeyCombo keys="Ctrl K" />
    </button>
  )
})

export default SearchBar
