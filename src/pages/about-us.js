import Footer from "components/Footer"
import Navbar from "components/Navbar"
import Head from "next/head"

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Queen River | Australia's Finest Beef Exports</title>
        <meta name="description" content="queenriver.com" />
      </Head>

      <Navbar />

      <div className="container" style={{ marginTop: 25 }}>Welcome to About Us Page</div>

      <Footer />
    </>
  )
}

export default AboutUsPage