import { Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import Carousel_C from './Carousel_C'
import AboutUs from './AboutUs'
import Products from './Products'
import '../css/hover.css'
import '../css/hover-min.css'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Animate from './Animate'

export default function Navbar() {
  return (
   <Container>
    <Header />
    <Animate />
    <Carousel_C />
    <AboutUs />
    <Products />
    <ContactUs />
   <Footer/>
   </Container>
  )
}
