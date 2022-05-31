import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/template.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import React from "react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
  // return 
  
  // <Component {...pageProps} />
}




export default MyApp