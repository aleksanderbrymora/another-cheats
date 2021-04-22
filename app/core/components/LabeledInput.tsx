import { FC, RefObject, useEffect, useState } from "react"

interface Props {
  name: string
  value: string
  onChange: (title: string) => void
  inputRef?: RefObject<HTMLInputElement>
}

const LabeledInput: FC<Props> = ({ name, value, onChange, inputRef }) => {
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    setIsEmpty(value === "")
  }, [value])

  return (
    <div
      className={`relative h-10 input-component mb-5 w-full label-transition flex-grow ${
        isEmpty ? "empty" : ""
      }`}
    >
      <input
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
        id={`word-input-${name}`}
        type="text"
        value={value}
        name={name}
        className="h-full w-full border-gray-300 dark:border-gray-500 px-2 transition-all rounded-sm dark:bg-gray-700 dark:text-gray-100"
      />
      <label
        htmlFor={`word-input-${name}`}
        className="absolute left-2 transition-all bg-white dark:bg-gray-700 dark:text-gray-100 focus:bg-transparent px-2 rounded-sm"
      >
        {name}
      </label>
    </div>
  )
}

export default LabeledInput
