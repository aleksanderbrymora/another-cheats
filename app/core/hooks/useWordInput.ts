// import produce from "immer"
// import create from "zustand"

// type IWordInput = {
//   definition: string
//   translation: string
//   canSubmit: boolean
//   updateDefinition: (definition: string) => void
//   updateTranslation: (translation: string) => void
// }

// export const useWordInput = create<IWordInput>((set, get) => ({
//   definition: "",
//   translation: "",
//   canSubmit: false,
//   updateTranslation: (translation) => {
//     set(
//       produce((draft: IWordInput) => {
//         draft.translation = translation
//         draft.canSubmit = draft.definition !== "" && draft.translation !== ""
//       })
//     )
//   },
//   updateDefinition: (definition) => {
//     set(
//       produce((draft: IWordInput) => {
//         draft.definition = definition
//         draft.canSubmit = draft.definition !== "" && draft.translation !== ""
//       })
//     )
//   },
// }))
