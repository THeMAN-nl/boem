import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const HoverText = styled.p`
	padding: 1.6rem 1rem;
	:hover {
		background: #e23e57;
        color:white;
		cursor: pointer;
	}`
function Header(){
   return( <nav className="navbar navbar-expand-lg navbar-light bg-light">
   
   <Link className="navbar-brand" to="/"> Boem</Link>
   
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="nav-menu navbar-nav navItems">
     <Link className="navbar-item nav-item nav-link active" to="/performance"><HoverText>Performance </HoverText><span className="sr-only">(current)</span></Link>
     <Link className="navbar-item nav-item nav-link active" to="/physio"><HoverText>Physio </HoverText><span className="sr-only">(current)</span></Link>
     <Link className="navbar-item nav-item nav-link active" to="/blog"><HoverText>Blog </HoverText><span className="sr-only">(current)</span></Link>
     <Link className="navbar-item nav-item nav-link active" to="/about"><HoverText>About us </HoverText><span className="sr-only">(current)</span></Link>
     </div>
     </div>
   
 </nav>
   )}

export default Header
