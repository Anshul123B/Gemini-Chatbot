import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <p className='Gemini'>Gemini</p>
        <div className="nav-link">
        <p>About Gemini</p>
        <p>Gemini App</p>
        <p>Subscriptions</p>
        <p>For Business</p>
      </div>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <span>Hello, Dev.</span>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beutiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask Gemini' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini display inacurate info, including about people, so double-check its responses. Your orivacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
