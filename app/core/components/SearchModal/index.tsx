import { AnimatePresence, motion } from "framer-motion"
import Background from "./Background"
import ModalBody from "./ModalBody"
import SearchInput from "./SearchInput"
import { observer } from "mobx-react-lite"
import { store } from "app/core/store"

const SearchModal = observer(() => {
  const {
    modal: { isOpen },
  } = store

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Background />
          <ModalBody>
            <SearchInput />
          </ModalBody>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

export default SearchModal
