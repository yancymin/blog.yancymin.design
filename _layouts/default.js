import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import reset from "react-style-reset/string";
import GlobalStyles from "../styles/mainStyle"

export default function DefaultLayout(props) {
  return (
    <main>
      <GlobalStyles />
      <Head>
        <title>{props.title}</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content={props.description} />
        <meta property="og:site_name" content="Yancy Min" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yancy Min" />
        <meta property="og:url" content="https:/blog.yancymin.design/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Yancy Min" />
        <meta name="twitter:url" content="https:/blog.yancymin.design/" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
