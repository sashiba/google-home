import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-child">
          <a href="#">Gmail</a>
        </div>
        <div className="navbar-child">
          <a href="#">Images</a>
        </div>
        <div className="navbar-child">
          <img
            src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
            alt="Applications icon"
            width="24px"
            height="24px"
          />
        </div>
        <div className="navbar-child">
          <img
            src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"
            alt="profile icon"
            width="30px"
            height="30px"
          />
        </div>
      </div>
      <div id="main">
        <img
          id="google-logo"
          src="https://www.google.bg/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt="google logo"
        />
        <div>
          <div className="searchBox">
            <img
              className="searchBox-item"
              src="https://cdn4.iconfinder.com/data/icons/user-interface-175/32/UIF-121-512.png"
              alt="lens"
              height="20px"
              width="20px"
            />
            <input type="text" className="searchBox-item" />
            <img
              className="searchBox-item"
              src="https://lh3.googleusercontent.com/proxy/01BzJclrspOQC-RWZ5ub4O-0-S9sjPGOZUxkJEHkeAsHgrq_mZkRFMXzUdVr5Bc6WoU4q0CoEANXZHDKXUuCO9OVYxBXBSxW6IFfvBBBYl8KfBU-ZgZ9x8c"
              alt="keyboard"
              height="30px"
              width="30px"
            />
            <img
              className="searchBox-item"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdX8ck7y7RlW8jUex4EiAMF-aHNk5tJk-4U_w02Z6GFCEkEM&s"
              alt="mic"
              height="40px"
              width="30px"
            />
          </div>

          <div className="searchButtons">
            <button type="submit" className="searchBox-button">
              Google Search
            </button>
            <button type="submit" className="searchBox-button">
              I'm feeling lucky KEKW
            </button>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div>
          <div className="footer-container-left">
            <span className="footer-child">
              <a href="#">Advertising</a>
              <a href="#">Business</a>
              <a href="#">About</a>
              <a href="#">How Search works</a>
            </span>
          </div>
          <div className="footer-container-right">
            <span className="footer-child">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Settings</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
