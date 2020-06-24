import React from 'react';
import Header from "../component/header"
import Button from 'react-bootstrap/Button';
import Footer from '../component/footer'
import runman from "../component/img/runman.jpg"
import Main from '../component/main'

function About() {
  return (
    <div className="home">
     <Header />
     <Main img={runman} title="About" subtitle="The mind your ally or enemy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 
     <Footer />
    </div>
  );
}

export default About;