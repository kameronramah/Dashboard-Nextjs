import type { NextPage } from 'next'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Table from './components/Table'




const TablePage: NextPage = () => {
  return (
    <div className="sb-nav-fixed">
      {/* side nav 
      navbar 
      main */}
      <NavBar/>
      <div id="layoutSidenav">
        <Table/>
      <SideNav/>
      </div>
    </div>
  )
}

export default TablePage