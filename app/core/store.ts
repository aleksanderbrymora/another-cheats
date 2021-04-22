import { types, getParent, SnapshotIn, destroy, cast } from "mobx-state-tree"
import { nanoid } from "nanoid"
import randomWords from "random-words"

export const Pair = types
  .model({
    id: types.identifier,
    definition: types.string,
    translation: types.string,
  })
  .actions((self) => ({
    remove() {
      getParent<typeof Sheet>(self, 2).remove(self)
    },
    updateDefinition(to: string) {
      self.definition = to
    },
    updateTranslation(to: string) {
      self.translation = to
    },
  }))

export const languageOptions = [
  "Polish",
  "English",
  "Chinese",
  "French",
  "Spanish",
  "Japanese",
  "German",
  "Portuguese",
  "Date",
  "other",
]

const Sheet = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    definitionInput: types.optional(types.string, ""),
    translationInput: types.optional(types.string, ""),
    definitionLanguage: types.optional(types.string, "Polish"),
    translationLanguage: types.optional(types.string, "English"),
    pairs: types.array(Pair),
  })
  .actions((self) => ({
    updateTranslationInput(to: string) {
      self.translationInput = to
    },
    updateDefinitionInput(to: string) {
      self.definitionInput = to
    },
    updateTitle(title: string) {
      self.title = title
    },
    updateDefinitionLanguage(to: string) {
      if (languageOptions.includes(to)) {
        self.definitionLanguage = to
      }
    },
    updateTranslationLanguage(to: string) {
      if (languageOptions.includes(to)) {
        self.translationLanguage = to
      }
    },
    addPair() {
      self.pairs.unshift(
        Pair.create({
          id: nanoid(),
          definition: self.definitionInput,
          translation: self.translationInput,
        })
      )
      self.definitionInput = ""
      self.translationInput = ""
    },
    remove(item: SnapshotIn<typeof Pair>) {
      destroy(item)
    },
    removeAll() {
      self.pairs.forEach((w) => destroy(w))
    },
    reorder(from: number, to: number) {
      const copyOfPairs = [...self.pairs]
      const [removed] = copyOfPairs.splice(from, 1)
      copyOfPairs.splice(to, 0, removed)
      self.pairs = cast(copyOfPairs)
    },
    addRandomWords() {
      for (let i = 0; i < 20; i++) {
        self.pairs.push(
          Pair.create({
            id: nanoid(),
            definition: randomWords(),
            translation: randomWords(),
          })
        )
      }
    },
  }))
  .views((self) => ({
    get canSubmit() {
      return self.definitionInput !== "" && self.translationInput !== ""
    },
    get numberOfWords() {
      return self.pairs.length
    },
  }))

const Modal = types
  .model({
    isOpen: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    open() {
      self.isOpen = true
    },
    close() {
      self.isOpen = false
    },
    toggle() {
      self.isOpen = !self.isOpen
    },
  }))

const RootStore = types.model({
  sheet: Sheet,
  modal: Modal,
})

export const store = RootStore.create({
  modal: Modal.create(),
  sheet: Sheet.create({ id: nanoid() }),
})
