// import create from "zustand"
// import produce, { enableMapSet } from "immer"
// import { nanoid } from "nanoid"
// import randomWords from "random-words"

// enableMapSet()
// const seed = true

// export type LanguageOption =
//   | "Polish"
//   | "English"
//   | "Chinese"
//   | "French"
//   | "Spanish"
//   | "Japanese"
//   | "German"
//   | "Portuguese"
//   | "Date"
//   | "other"

// export const languageOptions: LanguageOption[] = [
//   "Polish",
//   "English",
//   "Chinese",
//   "French",
//   "Spanish",
//   "Japanese",
//   "German",
//   "Portuguese",
//   "Date",
//   "other",
// ]

// export class WordPair {
//   id: string
//   constructor(public definition: string, public translation: string) {
//     this.id = nanoid()
//   }
// }

// export class Language {
//   id: string
//   constructor(public name: LanguageOption) {
//     this.id = nanoid()
//   }
// }

// const createRandomPairs = (amount = 100): WordPair[] => {
//   return Array(amount)
//     .fill(true)
//     .map((_) => new WordPair(randomWords(), randomWords()))
// }

// type SheetData = {
//   definition: Language
//   translation: Language
//   title: string
//   pairs: WordPair[]
//   updateTitle: (title: string) => void
//   setDefinition: (language: string) => void
//   setTranslation: (language: string) => void
//   addNewPair: (pair: { translation: string; definition: string }) => void
//   updateDefinition: (id: string, to: string) => void
//   updateTranslation: (id: string, to: string) => void
//   reorder: (startIndex: number, endIndex: number) => void
//   deletePair: (id: string) => void
// }

// export const useSheetData = create<SheetData>((set, get) => ({
//   definition: new Language("Polish"),
//   translation: new Language("English"),
//   title: "",
//   pairs: seed ? createRandomPairs() : [],
//   updateTitle: (title) =>
//     set(
//       produce((draft: SheetData) => {
//         draft.title = title
//       })
//     ),

//   setDefinition: (language) =>
//     set(
//       produce((draft: SheetData) => {
//         draft.definition = new Language(language as LanguageOption)
//       })
//     ),

//   setTranslation: (language) =>
//     set(
//       produce((draft: SheetData) => {
//         draft.translation = new Language(language as LanguageOption)
//       })
//     ),

//   addNewPair: ({ definition, translation }) =>
//     set(
//       produce((draft: SheetData) => {
//         draft.pairs.unshift(new WordPair(definition, translation))
//       })
//     ),

//   updateDefinition: (id, to) =>
//     set(
//       produce((draft: SheetData) => {
//         const found = draft.pairs.find((p) => p.id === id)
//         if (found) found.definition = to
//       })
//     ),

//   updateTranslation: (id, to) =>
//     set(
//       produce((draft: SheetData) => {
//         const found = draft.pairs.find((p) => p.id === id)
//         if (found) found.translation = to
//       })
//     ),

//   reorder: (startIndex, endIndex) =>
//     set(
//       produce((draft: SheetData) => {
//         const [removed] = draft.pairs.splice(startIndex, 1)
//         draft.pairs.splice(endIndex, 0, removed)
//       })
//     ),

//   deletePair: (id: string) =>
//     set(
//       produce((draft: SheetData) => {
//         const index = draft.pairs.findIndex((p) => p.id === id)
//         if (index >= 0) draft.pairs.splice(index, 1)
//       })
//     ),
// }))
