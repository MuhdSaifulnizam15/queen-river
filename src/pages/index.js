import { Layout } from "antd";
import FooterAdmin from "components/FooterLanding";
import Head from "next/head";

const { Header, Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Queen River | Australia's Finest Beef Exports</title>
        <meta name="description" content="queenriver.com" />
      </Head>

      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <FooterAdmin />
      </Layout>
    </>
  )
}

export default HomePage