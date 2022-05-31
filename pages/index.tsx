import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Card from './components/Card'

import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  return (
    <div className="sb-nav-fixed">
      {/* side nav 
      navbar 
      main */}
      <NavBar/>
      <div id="layoutSidenav">
        <Card/>
      <SideNav/>
      </div>
    </div>
  )
}

export default Home