import LabeledInput from "app/core/components/LabeledInput"
import WordCounter from "./WordCounter"
import { FormEvent, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { store } from "app/core/store"
import { DEBUG } from "app/core/constants"
import EditMenu from "./EditMenu"

const WordInput = observer(() => {
  const definitionInputRef = useRef<HTMLInputElement>(null)
  const {
    sheet: {
      addPair,
      definitionInput,
      updateDefinitionInput,
      translationInput,
      updateTranslationInput,
      canSubmit,
      addRandomWords,
    },
  } = store

  const handleAddNewPair = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addPair()
    definitionInputRef.current?.focus()
  }

  useEffect(() => {
    if (DEBUG) addRandomWords()
  })

  return (
    <div className="w-full">
      <form
        onSubmit={handleAddNewPair}
        className="flex space-x-3 w-full mt-5 items-start justify-between"
      >
        <LabeledInput
          name="Definition"
          value={definitionInput}
          inputRef={definitionInputRef}
          onChange={updateDefinitionInput}
        />
        <LabeledInput
          name="Translation"
          value={translationInput}
          onChange={updateTranslationInput}
        />
        <button
          className="py-2 px-4 bg-white font-semibold rounded-lg shadow-md focus:outline-none disabled:text-gray-400 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-100 dark:border-gray-900"
          disabled={!canSubmit}
          type="submit"
        >
          Add
        </button>
      </form>
      <div className="flex items-center justify-end w-full space-x-3">
        <EditMenu />
        <WordCounter />
      </div>
    </div>
  )
})

export default WordInput
