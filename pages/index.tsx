import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'

import styles from '../styles/Home.module.css'


export const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>szdqdizdi</title>
      </Head>
      <div className="sb-nav-fixed">
        <NavBar />
        <div id="layoutSidenav">
          <SideNav />
        </div>
      </div>


    </>

  )
}

export default Home