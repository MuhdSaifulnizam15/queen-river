import Head from "next/head"

import Footer from "components/Footer"
import Header from "components/Header"
import Navbar from "components/Navbar"

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Queen River | Australia's Finest Beef Exports</title>
        <meta name="description" content="queenriver.com" />
      </Head>

      <Navbar />
      <Header />
      <Footer />
    </>
  )
}

export default AboutUsPage