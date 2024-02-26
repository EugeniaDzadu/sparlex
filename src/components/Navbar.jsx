import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";



function Navbar(){
      return(

        <>
          {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        


        
        <div className="container-fluid sticky-top px-0">
            <div className="container-fluid topbar d-none d-lg-block">
                <div className="container px-0">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap">
                                <HashLink smooth to="#" className="me-4 text-light"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</HashLink>
                                <HashLink smooth to="#" className="me-4 text-light"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</HashLink>
                                <HashLink smooth to="#" className="text-light"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</HashLink>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-end">
                                <HashLink smooth to="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-facebook-f"></i></HashLink>
                                <HashLink smooth to="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-twitter"></i></HashLink>
                                <HashLink smooth to="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-instagram"></i></HashLink>
                                <HashLink smooth to="#" className="btn-square border rounded-circle nav-fill"><i className="fab fa-linkedin-in"></i></HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl">
                        <HashLink smooth to="/" className="navbar-brand">
                            <h1 className="text-primary display-4">Sparlex</h1>
                        </HashLink>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                            <div className="navbar-nav mx-auto border-top">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/About" className="nav-item nav-link">About</Link>
                                <Link to="/Service" className="nav-item nav-link active">Services</Link>
                                <Link to="/Price" className="nav-item nav-link">Price</Link>
                                <div className="nav-item dropdown">
                                    <HashLink smooth to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</HashLink>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="/Team" className="dropdown-item">Team</Link>
                                        <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link to="/Gallery" className="dropdown-item">Gallery</Link>
                                        <Link to="/Appointment" className="dropdown-item">Appointment</Link>
                                        <Link to="/404" className="dropdown-item">404 page</Link>
                                    </div>
                                </div>
                                <Link to="/Contact" className="nav-item nav-link">Contact Us</Link>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                                <button className="btn-search btn btn-primary btn-primary-outline-0 rounded-circle btn-lg-square" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                <Link to="/" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-4 ms-4">Book Appointment</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
      )



}

export default Navbar;