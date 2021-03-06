import type { NextPage } from 'next';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import ChartLine from './components/Charts/ChartLine';
import ChartBar from './components/Charts/ChartBar';
import ChartPie from './components/Charts/ChartPie';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div id="layoutSidenav_content">
        <div className="container-fluid px-4">
            <h1 className="mt-4">Charts</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item active">Charts</li>
            </ol>
            <div className="card mb-4">
                <div className="card-body">
                    Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                    <Link href="https://www.chartjs.org/docs/latest/">
                        <a target="_blank" >Chart.js documentation</a>
                    </Link>
                    .
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    Area Chart Example
                </div>
                <div className="card-body"><ChartLine height={30} width={'100%'}/></div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar me-1"></i>
                            Bar Chart Example
                        </div>
                        <div className="card-body"><ChartBar height={50} width={'100%'}/></div>
                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-pie me-1"></i>
                            Pie Chart Example
                        </div>
                        <div className="card-body"><ChartPie height={50} width={'100%'}/></div>
                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;