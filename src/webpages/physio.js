import React from 'react';
import Header from "../component/header"
import fysio from "../component/img/fysio2.jfif"
import Main from "../component/main"
import Footer from '../component/footer'
import Voordelen from '../component/voordelen'
import Pricing from  "../component/Pricing"


function Physio() {
  return (
    <div className="home">
     <Header /> 
     <Main img={fysio} title="Physio" subtitle="Feel fresh and green again" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <Voordelen />    
    <Pricing />
     <Footer />
    </div>
  );
}

export default Physio;