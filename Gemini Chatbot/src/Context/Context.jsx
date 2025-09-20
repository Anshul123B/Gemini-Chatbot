import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // NEW state
  const [loading, setLoading] = useState(false);

  const onSent = async (prompt) => {
    const query = prompt || input;
    if (!query.trim()) return;

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { role: "user", text: query }]);
    setInput(""); // clear input box

    try {
      setLoading(true);
      const response = await runChat(query);

      // Add Gemini response
      setChatHistory((prev) => [...prev, { role: "gemini", text: response }]);
    } catch (error) {
      console.error("Error in onSent:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "gemini", text: "Error: Could not get response from Gemini." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    onSent,
    chatHistory,
    input,
    setInput,
    loading,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
