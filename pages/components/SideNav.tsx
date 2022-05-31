// import styles from '../styles/Home.module.css'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';

// import { Button } from 'react-bootstrap';


const SideNav = () => {
    return (
        <>
            <div id="layoutSidenav_nav">
                {/* 
            <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                     */}
                <Nav defaultActiveKey="/home" className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link href="/">
                                {/* <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div> */}
                                <a>Dashboard</a>

                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <Link className="nav-link collapsed " href="/tablePage">
                                <>
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i>
                                        Layouts
                                    </div>
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>

                                </>
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <Nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" href="/static">Static Navigation</Link>
                                    <Link className="nav-link" href="/ligt_side_nav">Light Sidenav</Link>
                                </Nav>
                            </div>
                            <Link className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <>
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </>
                            </Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        <>
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>

                                        </>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <Link className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        <>
                                            Error
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>

                                        </>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" href="401.html">401 Page</Link>
                                            <Link className="nav-link" href="404.html">404 Page</Link>
                                            <Link className="nav-link" href="500.html">500 Page</Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link className="nav-link" href="charts.html">
                                <>
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                                </>
                            </Link>
                            <Link className="nav-link" href="tables.html">
                                <>
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                                </>

                            </Link>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </Nav>
            </div>
        </>
    )
}

export default SideNav