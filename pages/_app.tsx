import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/template.css'
import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import { useEffect, useState  } from "react";

// import { Dispatch, SetStateAction } from "react";


import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }: AppProps) {
  const [openSideNav, setOpenSideNav] = useState(false)
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <div className={`sb-nav-fixed ${(openSideNav) ? "sb-sidenav-toggled" : ""}`}>
        <NavBar  setOpenSideNav={setOpenSideNav}  openSideNav={openSideNav}/>
        <div id="layoutSidenav">
          <SideNav />
          <Component {...pageProps} />
        </div>
      </div>

    </>
  )


}

export default MyApp