import DisplayKeyCombo from "../DisplayKeyCombo"
import { observer } from "mobx-react-lite"
import { store } from "app/core/store"

const CloseButton = observer(() => {
  const {
    modal: { close },
  } = store
  return (
    <button onClick={close}>
      <DisplayKeyCombo keys="esc" />
    </button>
  )
})

export default CloseButton
