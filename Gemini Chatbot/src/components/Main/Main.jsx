import React, { useContext, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    chatHistory,  // NEW: array of { role: "user"|"gemini", text: string }
    input,
    setInput,
    loading,
  } = useContext(Context);

  // Log chat history to console
  useEffect(() => {
    if (chatHistory.length > 0) {
      const last = chatHistory[chatHistory.length - 1];
      console.log(`${last.role === "user" ? "You" : "Gemini"}:`, last.text);
    }
  }, [chatHistory]);

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
        {/* Chat Area */}
        <div className="chat-area">
          {chatHistory.length === 0 ? (
            <div className="greet">
              <span>Hello, Dev.</span>
              <p>How can I help you today?</p>
            </div>
          ) : (
            chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${msg.role === "user" ? "user" : "gemini"}`}
              >
                {msg.text}
              </div>
            ))
          )}
          {loading && <p className="loading">Gemini is thinking...</p>}
        </div>

        {/* Input */}
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
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="Send"
              />
            </div>
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
