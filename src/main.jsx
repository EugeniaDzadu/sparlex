import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Gallery'
import Index from './pages/Index'
import About from './pages/About'
import Price from './pages/Price'
import Service from './pages/Service'
import Team from './pages/Team'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from './pages/Gallery'
import Appointment from './pages/Appointment'




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
           
         <Routes>

             <Route path='/' Component={Index}/>
                  

             <Route path='/Conatct' Component={Contact}/>

             <Route path='/About' Component={About}/>

             <Route path='/Price' Component={Price}/>

             <Route path='/Service' Component={Service}/>

             <Route path='/Team' Component={Team}/>

             <Route path='/Gallery' Component={Gallery}/>

             <Route path='/Appointment' Component={Appointment}/>
         </Routes>
    
    
    
    
    </BrowserRouter>
)
