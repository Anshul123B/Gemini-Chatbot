import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    chatHistory,
    input,
    setInput,
    loading,
  } = useContext(Context);

  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing effect for last Gemini message
  useEffect(() => {
    if (chatHistory.length > 0) {
      const last = chatHistory[chatHistory.length - 1];
      if (last.role === "gemini") {
        setDisplayedText(""); // reset
        setTypingIndex(0);
        let i = 0;
        const interval = setInterval(() => {
          if (i < last.text.length) {
            setDisplayedText((prev) => prev + last.text[i]);
            i++;
          } else {
            clearInterval(interval);
          }
        }, 10); // speed (ms per character)
        return () => clearInterval(interval);
      }
    }
  }, [chatHistory]);

  // Handle send with Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

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
            chatHistory.map((msg, index) => {
              if (index === chatHistory.length - 1 && msg.role === "gemini") {
                // Typing effect for last Gemini message
                return (
                  <div key={index} className="chat-bubble gemini">
                    <img src={assets.gemini_icon} alt="Gemini" className="gemini-icon" />
                    <span>{displayedText}</span>
                  </div>
                );
              } else {
                // Normal render for other messages
                return (
                  <div
                    key={index}
                    className={`chat-bubble ${msg.role === "user" ? "user" : "gemini"}`}
                  >
                    {msg.role === "gemini" && (
                      <img src={assets.gemini_icon} alt="Gemini" className="gemini-icon" />
                    )}
                    <span>{msg.text}</span>
                  </div>
                );
              }
            })
          )}
          {loading && (
            <div className="chat-bubble gemini">
              <img src={assets.gemini_icon} alt="Gemini" className="gemini-icon" />
              <span className="loading">Gemini is thinking...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Ask Gemini"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="Send" />
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
