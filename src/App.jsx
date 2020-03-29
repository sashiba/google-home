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

      <img
        id="google-logo"
        src="https://www.google.bg/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        alt="google logo"
      />
      <div>
        <div className="searchBox">
          <div className="searchBox-item">Lens</div>
          <input type="text" className="searchBox-item" />
          <div className="searchBox-item">Microphone</div>
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
