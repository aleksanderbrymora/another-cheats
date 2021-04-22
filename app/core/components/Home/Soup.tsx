import { store } from "app/core/store"
import { AnimatePresence, motion } from "framer-motion"
import React, { FC, useEffect, useState } from "react"
import { SearchIcon } from "../Icons"
import { Word } from "./Word"
import { observer } from "mobx-react-lite"

const Soup = observer(() => {
  const AMOUNT_OF_WORDS = 30
  const [words, setWords] = useState<Word[]>([])
  const {
    modal: { open },
  } = store

  useEffect(() => {
    if (words.length > AMOUNT_OF_WORDS) {
      setWords((prev) => {
        const newWords = [...prev]
        newWords.shift()
        return newWords ? newWords : ([] as Word[])
      })
    }
    const timeout = setTimeout(() => {
      setWords((prev) => [...prev, new Word()])
    }, 1000)
    return () => clearTimeout(timeout)
  }, [words, setWords])

  return (
    <div className="w-full h-96 flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 -rotate-1 sm:-rotate-2 overflow-hidden">
      <div className="absolute w-full h-full p-5">
        <div className="w-full h-full absolute" style={{ filter: "blur(3px)" }}>
          <AnimatePresence>
            {words.map((w) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <WordComponent word={w} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="w-full h-full flex items-center justify-center relative">
          <button
            onClick={open}
            className="bg-gray-100 bg-opacity-90 hover:bg-gray-200 text-black text-4xl leading-6 font-bold py-6 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-100 focus:outline-none transition-colors duration-200"
          >
            <div className="flex space-x-3 align-center justify-between">
              <SearchIcon dimension={32} />
              <p>Give it a search</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
})

const WordComponent: FC<{ word: Word }> = ({ word }) => {
  const { top, left, content, size } = word

  return (
    <p style={{ top, left }} className={`text-white text-xl font-bold absolute text-${size}`}>
      {content}
    </p>
  )
}

export default Soup
