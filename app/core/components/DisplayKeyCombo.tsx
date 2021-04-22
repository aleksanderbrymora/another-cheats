import React, { FC } from "react"

const DisplayKeyCombo: FC<{ keys: string }> = ({ keys }) => {
  return (
    <p className="text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md dark:text-gray-100 dark:border-gray-200">
      {keys}
    </p>
  )
}

export default DisplayKeyCombo
