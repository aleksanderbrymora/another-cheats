import SheetData from "app/core/components/Create/SheetData"
import TitleBackground from "app/core/components/Create/TitleBackground"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import dynamic from "next/dynamic"
import React from "react"

// removes the warning about some mismatching ids on server and client when using dnd
const ClientOnlyWords = dynamic(() => import("app/core/components/Create/Words"), { ssr: false })

const Create: BlitzPage = () => {
  return (
    <div className="w-2/3 m-auto">
      <SheetData />
      <ClientOnlyWords />
      <TitleBackground />
    </div>
  )
}

Create.suppressFirstRenderFlicker = true
Create.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Create
