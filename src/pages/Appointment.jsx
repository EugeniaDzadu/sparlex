import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Appoint from "../components/Appoint";




function Appointment(){

        return(
           
           <>
             <Navbar/>
             <Search/>
                 
             <div className="container-fluid bg-breadcrumb py-5">
            <div className="container text-center py-5">
                <h3 className="text-white display-3 mb-4">Appointment</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><HashLink smooth to="#">Pages</HashLink></li>
                    <li className="breadcrumb-item active text-white">Appointment</li>
                </ol>    
            </div>
        </div>

            <Appoint/>
             <Footer/>
           
           </>


        )




}

export default Appointment;