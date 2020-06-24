import React from 'react';
import Header from "../component/header"

import Main from '../component/main'
import fitgirl from "../component/img/article.jpg"
import Footer from '../component/footer'
import Voordelen from '../component/voordelen'
import Pricing from  "../component/Pricing"


function Performance() {
  return (
    <div className="home">
     <Header /> 
     <Main img={fitgirl} title="Performance" subtitle="Achieve your fitness goals" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
     <Voordelen />
     <Pricing />
     <Footer />
    </div>
  );
}

export default Performance;