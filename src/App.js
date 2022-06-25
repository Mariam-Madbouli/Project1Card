import React from 'react';
import photo from './images/desktop.jpg'
import './App.css';

function App() {
  return (

    <div className="card">
      <div className= "text">

        <div className="textup">

          <h1>Get <span>insights</span> that help your business grow.</h1>
          <p className="ph">Discover the benetfits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

        

        </div>

        <div className = "textdown">
          <div className="num">
            <h3>10K+</h3>
            <p className = "phar">COMPANIES</p>
          </div>

          <div className="num">
            <h3>314</h3>
            <p className = "phar">TEMPLATES</p>
          </div>

          <div className="num">
            <h3>12M+</h3>
            <p className = "phar">QUERIES</p>
          </div>
          
        </div>

        

      </div>
      
      <div className="image">
        <img src={photo} alt=""/> 
      </div>
    </div>
  );
}

export default App;
