import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {

    try {
      setLoading(true);
      setResultData(""); // clear previous
      const query = prompt || input;
      setRecentPrompt(query);

      const response = await runChat(query);
      setResultData(response);
    } catch (error) {
      console.error("Error in onSent:", error);
      setResultData("Error: Could not get response from Gemini.");
    } finally {
      setLoading(false);
      setInput("");// clear input after send
    }
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
