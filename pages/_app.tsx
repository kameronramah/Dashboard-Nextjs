import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/template.css'
import '../styles/globals.css'



import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import {useEffect} from "react";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
// this is what the solution says:
useEffect(() => {
  import("bootstrap/dist/js/bootstrap");
}, []);

  return (
    <>
      <NavBar />
      <div id="layoutSidenav">
        <SideNav />
        <Component {...pageProps} />
      </div>
    </>
  )


}

export default MyApp