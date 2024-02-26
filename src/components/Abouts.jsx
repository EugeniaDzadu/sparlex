import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Abouts(){

    return(

        <>
           <div className="container-fluid about py-5">
            <div className="container py-5">
                        <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="video">
                            <img src="src/img/about-1.jpg" className="img-fluid rounded" alt=""/>
                                <div className="position-absolute rounded border-5 border-top border-start border-white" style={{bottom: "0", right: "0"}}>
                                <img src="src/img/about-2.jpg" className="img-fluid rounded" alt=""/>
                            </div>
                            <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div>
                            <p className="fs-4 text-uppercase text-primary">About Us</p>
                            <h1 className="display-4 mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
                            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-gitkraken fa-3x text-primary"></i>
                                        <div className="ms-4">
                                            <h5 className="mb-2">Special Offers</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-gift fa-3x text-primary"></i>
                                        <div className="ms-4">
                                            <h5 className="mb-2">Special Offers</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <HashLink smooth to="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Explore More</HashLink>
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Abouts;