import HeroText from "app/core/components/Home/HeroText"
import Soup from "app/core/components/Home/Soup"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

const Home: BlitzPage = () => {
  return (
    <>
      <HeroText />
      <Soup />
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
