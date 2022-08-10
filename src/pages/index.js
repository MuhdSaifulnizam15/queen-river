import Head from "next/head";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Header from "components/Header";

const HomePage = () => {
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

export default HomePage