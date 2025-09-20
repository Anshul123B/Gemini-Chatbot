import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      {/* Navbar */}
      <div className="nav">
        <p className="Gemini">Gemini</p>
        <div className="nav-link">
          <p>About Gemini</p>
          <p>Gemini App</p>
          <p>Subscriptions</p>
          <p>For Business</p>
        </div>
        <img src={assets.user_icon} alt="User" />
      </div>
  
      <div className="main-container">
        <div className="greet">
          <span>Hello, Dev.</span>
          <p>How can I help you today?</p>
        </div>


        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="Compass" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="Bulb" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="Message" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="Code" />
          </div>
        </div>

        {/* Input + Result */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Ask Gemini"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>

          {/* Result Section */}
          <div className="result">
            {recentPrompt && (
              <div>
                {recentPrompt}
              </div>
            )}
            {!loading && resultData && (() => {
              console.log("You:", recentPrompt);       
              console.log("Gemini:", resultData);     
              return null; 
            })()}
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
