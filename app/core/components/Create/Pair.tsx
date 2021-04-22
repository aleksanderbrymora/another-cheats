import { Pair } from "app/core/store"
import { Observer } from "mobx-react-lite"
import { Instance } from "mobx-state-tree"
import React, { FC, memo, useRef, useState } from "react"
import { Draggable, DraggableProvidedDragHandleProps } from "react-beautiful-dnd"

interface Props {
  pair: Instance<typeof Pair>
  index: number
}

const WordPair: FC<Props> = ({ pair, index }) => {
  const { definition, translation, updateDefinition, updateTranslation, remove } = pair

  return (
    <Draggable draggableId={pair.id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div ref={innerRef} {...draggableProps}>
          <Observer
            render={() => (
              <div className="flex items-center justify-between space-x-3">
                <Input initial={definition} updateValue={updateDefinition} />
                <span className="dark:text-gray-100"> - </span>
                <Input initial={translation} updateValue={updateTranslation} />
                <div className="flex items-center justify-between space-x-3">
                  <Trash deletePair={remove} />
                  <Handle handleProps={dragHandleProps} />
                </div>
              </div>
            )}
          />
        </div>
      )}
    </Draggable>
  )
}

const Handle: FC<{ handleProps?: DraggableProvidedDragHandleProps }> = ({ handleProps }) => {
  return (
    <div {...handleProps} className="w-6 h-6">
      <svg
        className="w-full h-full dark:text-gray-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height={24}
        width={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  )
}

const Trash: FC<{ deletePair: () => void }> = ({ deletePair }) => {
  return (
    <button aria-label="Delete this word pair" onClick={deletePair}>
      <svg
        className="w-6 h-6 dark:text-gray-100"
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  )
}

const Input: FC<{ initial: string; updateValue: (to: string) => void }> = ({
  initial,
  updateValue,
}) => {
  const [value, setValue] = useState(initial)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // i hate myself for this...
  const loseFocus = () => setTimeout(() => inputRef.current?.blur(), 10)

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateValue(value)
      loseFocus()
    }
    if (e.key === "Escape") {
      e.preventDefault()
      setValue(initial)
      loseFocus()
    }
  }

  return (
    <input
      ref={inputRef}
      className="w-full text-center font-medium text-xl my-1 py-2 focus:outline-none bg-transparent dark:text-gray-100"
      value={value}
      onChange={handleChange}
      onBlur={() => updateValue(value)}
      onKeyDown={keyHandler}
    />
  )
}

export default memo(WordPair)
