import React from 'react';
import './App.css';

function App() {
  return (
    // navbar(gmil, iimages, apps, profile)

    // search(lupa, textfiled, keyboart, mic)

    <div className="App">
      <div>
        <div>
          <a href="#">Gmail</a>
        </div>
        <div>
          <a href="#">Images</a>
        </div>
        <div> Applications</div>
        <div>Profile</div>
      </div>

      <img
        src="https://www.google.bg/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        alt="google logo"
      />
      <div>
        <div>Lens</div>
        <input type="text" />
        <div>Microphone</div>
      </div>

      <button type="submit">Google Search</button>
      <button type="submit">I'm feeling lucky KEKW</button>
      <footer>
        <div>Advertising Business About How Search works Privacy Terms Settings</div>
      </footer>
    </div>
  );
}

export default App;
