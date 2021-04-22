import React from "react"
import { observer } from "mobx-react-lite"
import { store } from "app/core/store"

const TitleBackground = observer(() => {
  const {
    sheet: { title },
  } = store

  return (
    <h1
      className="fixed left-0 bottom-0 text-9xl font-black text-gray-100 focus:outline-none overflow-hidden whitespace-nowrap dark:text-gray-800"
      style={{ zIndex: -100 }}
      tabIndex={-1}
    >
      {title}
    </h1>
  )
})

export default TitleBackground
