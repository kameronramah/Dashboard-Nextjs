import type { NextPage } from 'next'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Table from './components/Table'
import Link from 'next/link';




const TablePage: NextPage = () => {
  return (
      <div id="layoutSidenav_content">
        <div className="container-fluid px-4">
            <h1 className="mt-4">Tables</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item active">Tables</li>
            </ol>
            <div className="card mb-4">
                <div className="card-body">
                    DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                    <Link href="https://datatables.net/">  <a target="_blank" >official DataTables documentation</a></Link>
                    .
                </div>
            </div>
            <Table/>
        </div>          
      </div>
  )
}

export default TablePage