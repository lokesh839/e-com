import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productes from './components/Productes/Productes'
import AOS from'aos';
import"aos/dist/aos.css";
import TopProductes from './components/Topproduetes/TopProductes';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonilas from './components/Testimonilas/Testimonilas';
import Footer from './components/Footer/Footer';

const App = () => {
 React,useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,

  });

 },[]);

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Productes/>
      <TopProductes/>
      <Banner/>
      <Subscribe/>
      <Productes/>
      <Testimonilas/>
      <Footer/>

      </div>
  )
}

export default App