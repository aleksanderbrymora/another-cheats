import { store } from "app/core/store"
import { observer } from "mobx-react-lite"
import simplur from "simplur"

const WordCounter = observer(() => {
  const {
    sheet: { numberOfWords },
  } = store

  return (
    <small className="whitespace-nowrap  block w-min dark:text-gray-100">
      {numberOfWords === 0 ? "Add some words!" : simplur`${numberOfWords} word[|s]`}
    </small>
  )
})

export default WordCounter
