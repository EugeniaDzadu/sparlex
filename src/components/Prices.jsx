import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Prices(){
    return(
        <>
                    <div className="container-fluid pricing py-5" style={{background: "var(--bs-primary)"}}>
            <div className="container py-5">
                <div className="owl-carousel pricing-carousel">
                    <div className="pricing-item">
                        <div className="rounded pricing-content">
                            <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>49<small className="text-muted" style={{fontSize: "16px", lineHeight: "40px"}}>/Mo</small>
                                </h1>
                                <h5 className="text-primary text-uppercase m-0">Basic Plan</h5>
                            </div>
                            <div className="p-4">
                                <p><i className="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                                <Link to="" className="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-item">
                        <div className="pricing-content rounded">
                            <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>99<small className="text-muted" style={{fontSize: "16px", lineHeight: "40px"}}>/Mo</small>
                                </h1>
                                <h5 className="text-primary text-uppercase m-0">Family Plan</h5>
                            </div>
                            <div className="p-4">
                                <p><i className="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                                <Link to="" className="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-item">
                        <div className="pricing-content rounded">
                            <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted" style={{fontSize: "22px; lineHeight: 45px"}}>$</small>149<small className="text-muted" style={{fontSize: "16px", lineHeight: "40px"}}>/Mo</small>
                                </h1>
                                <h5 className="text-primary text-uppercase m-0">VIP Plan</h5>
                            </div>
                            <div className="p-4">
                                <p><i className="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                                <Link to="" className="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-item">
                        <div className="pricing-content rounded">
                            <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>199<small className="text-muted" style={{fontSize: "16px", lineHeight: "40px"}}>/Mo</small>
                                </h1>
                                <h5 className="text-primary text-uppercase m-0">Most Plan</h5>
                            </div>
                            <div className="p-4">
                                <p><i className="fa fa-check text-primary me-2"></i>Full Body Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Deep Tissue Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Hot Stone Massage</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Tissue Body Polish</p>
                                <p><i className="fa fa-check text-primary me-2"></i>Foot & Nail Care</p>
                                <Link to="" className="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Prices;