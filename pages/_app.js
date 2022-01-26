import "@/styles/globals.css";
import "@/styles/chekeditor.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VietKA TV: Giải pháp dịch vụ truyền thông</title>
        <link
          rel='shortcut icon'
          href='https://res.cloudinary.com/hiname/image/upload/v1643085483/vk_aawlju.jpg'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
