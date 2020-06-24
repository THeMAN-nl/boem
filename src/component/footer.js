import React from 'react'


var d = new Date();
var year = d.getFullYear();

function Footer() {
    return (
        <div className="footer">
            <footer >
                <div>
                   <h3>lorum</h3> 
                   <p>

Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <h6>Copyright {year}</h6>
            </footer>
        </div>
    )
}

export default Footer


