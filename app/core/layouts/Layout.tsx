import { Head } from "blitz"
import { ReactNode } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import Navbar from "../components/Navbar"
import SearchModal from "../components/SearchModal"
import { observer } from "mobx-react-lite"
import { store } from "../store"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = observer(({ title, children }: LayoutProps) => {
  const {
    modal: { toggle, close },
  } = store

  const handleCtrlK = (e: KeyboardEvent) => {
    console.log("Clicked Ctrl K")
    e.preventDefault()
    toggle()
  }

  const handleEsc = (e: KeyboardEvent) => {
    e.preventDefault()
    close()
  }

  useHotkeys("ctrl+k", handleCtrlK)
  useHotkeys("esc", handleEsc)

  return (
    <>
      <Head>
        <title>{title || "cheats"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl min-h-screen m-auto px-10 pb-10">
        <Navbar />
        {children}
        <SearchModal />
      </div>
    </>
  )
})

export default Layout
