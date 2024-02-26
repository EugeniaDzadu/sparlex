import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from "../components/Search";
import Abouts from "../components/Abouts";
import Pictures from "../components/Pictures";
import Appoint from "../components/Appoint";
import Prices from "../components/Prices";




function Index(){

        return(
           
           <>
             <Navbar/>
             <Search/>

                
                 <Carousel>   
                <div className="container-fluid carousel-header px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ol>
                
                <div className="carousel-inner" role="listbox">
                    
                    <div className="carousel-item active">
                    
                        <img src="src/img/carousel-1.jpg" className="img-fluid" alt="Image"/>
                    
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h4 className="text-primary text-uppercase mb-3">Spa & Beauty Center</h4>
                                <h1 className="display-1 text-capitalize text-dark mb-3">Massage Treatment</h1>
                                <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <HashLink className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" smooth to="#">Get Start</HashLink>
                                    <HashLink className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" smooth to="#">Book Now</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                    <div className="carousel-item">
                    
                        <img src="src/img/carousel-2.jpg" className="img-fluid" alt="Image"/>
                    
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h4 className="text-primary text-uppercase mb-3" style={{letterSpacing: "3px"}}>Spa & Beauty Center</h4>
                                <h1 className="display-1 text-capitalize text-dark mb-3">Facial Treatment</h1>
                                <p className="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <HashLink className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" smooth to="#">Get Start</HashLink>
                                    <HashLink className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" smooth to="#">Book Now</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className="carousel-item">
                    
                        <img src="src/img/carousel-3.jpg" className="img-fluid" alt="Image"/>
                    
                        <div className="carousel-caption">
                            <div className="p-3" style= {{maxWidth: "900px"}}>
                                <h4 className="text-primary text-uppercase mb-3" style={{letterSpacing: "3px"}}>Spa & Beauty Center</h4>
                                <h1 className="display-1 text-capitalize text-dark">Cellulite Treatment</h1>
                                <p className="mx-md-5 fs-4 px-5 mb-5 text-dark">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <HashLink className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" smooth to="#">Get Start</HashLink>
                                    <HashLink className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" smooth to="#">Book Now</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </Carousel>  

        <div className="container-fluid services py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "800px"}}>
                    <p className="fs-4 text-uppercase text-center text-primary">Our Service</p>
                    <h1 className="display-3">Spa & Beauty Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Skin Care</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-1.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-2.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Face Masking</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Stream Bath</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-3.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-4.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Facial Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Body Massage</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-5.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-6.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Aroma Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="services-content text-end">
                                        <h3>Mineral Baths</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-3.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src="src/img/services-1.jpg" className="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="services-content text-start">
                                        <h3>Stone Therapy</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make Order</HashLink >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="services-btn text-center">
                            <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Service More</HashLink >
                        </div>
                    </div>
                </div>
            </div>
        </div>

             <Abouts/>


            <Appoint/>

            <Pictures/>
            <Prices/>


             <Footer/>
           
           </>


        )




}

export default Index;