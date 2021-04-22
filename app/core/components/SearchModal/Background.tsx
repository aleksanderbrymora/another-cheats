import React from "react"
import { observer } from "mobx-react-lite"
import { store } from "app/core/store"

const Background = observer(() => {
  const {
    modal: { close },
  } = store

  return (
    <div
      className="inset-0 w-screen h-screen z-40 fixed bg-black bg-opacity-30"
      role="none"
      onClick={close}
      onKeyDown={(e) => {
        if (e.code === "27") {
          close()
        }
      }}
      tabIndex={-1}
    />
  )
})

export default Background
