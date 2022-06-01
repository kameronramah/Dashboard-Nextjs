// import styles from '../styles/Home.module.css'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import Link from 'next/link';
import { useState } from 'react';

// import { Button } from 'react-bootstrap';


const SideNav = () => {

 const [boolTheme,setBoolTheme] = useState(false)

    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className={`sb-sidenav accordion ${(boolTheme) ? "sb-sidenav-dark" : "sb-sidenav-light"}`} id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link href="/">
                                <a className="nav-link" >
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                            </Link>

                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link href="/">
                                        <a className="nav-link" >Static Navigation</a>
                                    </Link>
                                    <a className="nav-link"  onClick={()=>{setBoolTheme(!boolTheme)} }>Light Sidenav</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href="LoginPage">
                                                <a className="nav-link" >Login</a>
                                            </Link>
                                            <Link href="RegisterPage">
                                                <a className="nav-link" >Register</a>
                                            </Link>
                                            <Link href="ForgetPasswordPage">
                                                <a className="nav-link" >Forgot Password</a>
                                            </Link>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href="401Page">
                                            <a className="nav-link" >401 Page</a>
                                            </Link>
                                            <Link href="404Page">
                                            <a className="nav-link" >404 Page</a>
                                            </Link>
                                            <Link href="500Page">
                                                <a className="nav-link" >500 Page</a>
                                            </Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link href="charts">
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            </Link>
                            <Link href="tablePage">
                            <a className="nav-link" >
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                            </Link>

                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SideNav