import React from 'react';
import Header from "../component/header"
import Main from "../component/main"
import Cards from '../component/Cards'
import Footer from '../component/footer'
import runman from "../component/img/runman.jpg"
import Modals from "../component/modal"
function Home() {
  return (
    <div className="home">
     <Modals/>
     <Header /> 
     <Main img={runman} title="B.O.E.M" subtitle="Workouts based on elite mindset" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
     <Cards />
     <Footer/>
    </div>
  );
}

export default Home;