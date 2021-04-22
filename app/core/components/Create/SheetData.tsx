import LabeledInput from "app/core/components/LabeledInput"
import { languageOptions, store } from "app/core/store"
import React, { FC } from "react"
import WordInput from "./WordInput"
import { observer } from "mobx-react-lite"

const SheetData = observer(() => {
  const {
    sheet: {
      title,
      updateTitle,
      definitionLanguage,
      updateDefinitionLanguage,
      translationLanguage,
      updateTranslationLanguage,
    },
  } = store

  return (
    <div
      className="shadow-xl bg-white rounded-lg p-5 mb-5 sticky top-5 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="flex space-x-3 items-start justify-between w-full border-b border-gray-200 py-1">
        <LabeledInput name="Title" value={title} onChange={updateTitle} />
        <LanguageSelection selected={definitionLanguage} handleChange={updateDefinitionLanguage} />
        <LanguageSelection
          selected={translationLanguage}
          handleChange={updateTranslationLanguage}
        />
      </div>
      <WordInput />
    </div>
  )
})

const LanguageSelection: FC<{
  selected: string
  handleChange: (language: string) => void
}> = ({ selected, handleChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={(e) => handleChange(e.target.value)}
      className="block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-100 flex-grow-0"
    >
      {languageOptions.map((l) => (
        <option value={l} key={l}>
          {l}
        </option>
      ))}
    </select>
  )
}

export default SheetData
