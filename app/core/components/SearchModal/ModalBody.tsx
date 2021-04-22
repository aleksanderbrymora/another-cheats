import React, { FC } from "react"

const ModalBody: FC = ({ children }) => {
  return (
    <div
      role="combobox"
      aria-expanded="true"
      aria-haspopup="listbox"
      aria-labelledby="search-box"
      aria-controls="esc"
      tabIndex={0}
      className="z-50 fixed inset-0 bg-white max-w-screen-md m-auto h-5/6 p-5 rounded-2xl dark:bg-gray-900"
    >
      {children}
    </div>
  )
}

export default ModalBody
