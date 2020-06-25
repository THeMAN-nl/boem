import React from 'react';
import Home from "./webpages/home"
import Physio from "./webpages/physio"
import Performance from "./webpages/performance"
import Blog from "./webpages/blog"
import About from "./webpages/about"
import Form from "./component/Form"
import {Route,BrowserRouter} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Route exact path= "/" component={Home}/>
     <Route exact path= "/performance" component={Performance}/>
     <Route exact path= "/physio" component={Physio}/>
     <Route exact path= "/blog" component={Blog}/>
     <Route exact path= "/about" component={About}/>
     <Route exact path= "/form" component={Form}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
