import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		    <div class="container">
          <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="60" width="320" />
              <div
                @onClick="welcomeDiv"
                 class="text">
                <p id="startButton">
                  adam berntsson
                </p>
              </div>
            </svg>
            <div id="welcomeDiv" class="hidden">
              <ul class="social-icons">
                <li><a href="https://github.com/80-am" class="social-icon"> <i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adam-berntsson-8b0465141/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                <li><a href="mailto:adam@flonko.com" class="social-icon"> <i class="fa fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
