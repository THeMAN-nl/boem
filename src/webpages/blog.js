import React,{useState} from 'react';
import Header from "../component/header"
import Footer from '../component/footer'

const axios = require('axios').default;

function Blog() {
  const [test2, setTest2] = useState([]);

 
  
axios.get('http://localhost:5000/posting')
.then(function (response) {
  // handle success
  setTest2({
    title:response.data.title,
    topic:response.data.date,
    text:response.data.text,})
  // console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});

 
  // console.log(test3)
  return (
    <div className="blog">
     <Header /> 
     
     
    
     <div className="row ">
    <div className="col-md">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{test2.date}</strong>
          <h3 className="mb-0">{test2.title}</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">{test2.text}</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="600" height="350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    </div>
    
     <Footer />
    </div>
  );
}

export default Blog;