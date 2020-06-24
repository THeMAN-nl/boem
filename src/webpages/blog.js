import React,{useState, Component} from 'react';
import Header from "../component/header"
import Footer from '../component/footer'
const bodyParser = require('body-parser')
const axios = require('axios').default;

function Blog() {
  const [test2, setTest2] = useState([]);

  fetch('http://localhost:5000/posting')
  .then(response => response.json())
  .then(data => setTest2(data));

  // useEffect(() => {
  // do something
  // }, [test2])
  
// axios.get('/user?ID=12345')
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .finally(function () {
//   // always executed
// });

  const test =[{title:'First post',text:'This is a wider card with supporting text below as a natural lead-in to additional content.', topic:'workout'},{title:'Featured post',text:'This is a wider card with supporting text below as a natural lead-in to additional content.', topic:'diet'}]
 console.log(test2)
  
  return (
    <div className="blog">
     <Header /> 
     {test2.map(obj=>
    
     <div className="row ">
    <div className="col-md">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{obj.topic}</strong>
          <h3 className="mb-0">{obj.title}</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">{obj.text}</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="600" height="350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    </div>
    )}
     <Footer />
    </div>
  );
}

export default Blog;