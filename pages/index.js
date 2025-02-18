import Head from "next/head";
import Footer from "@components/Footer";
import SlideShow from "./slideshow";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andrea and Carson -- Getting Married!</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Playfair+Display:wght@500&display=swap"
        ></link>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
        />
        {/*<link*/}
        {/*    rel="stylesheet"*/}
        {/*    href="https://fonts.googleapis.com/css?family=Sofia-Sans"*/}
        {/*/>*/}
      </Head>
      <main>
          <SlideShow></SlideShow>
      </main>

      <Footer />
    </div>
  )
}

