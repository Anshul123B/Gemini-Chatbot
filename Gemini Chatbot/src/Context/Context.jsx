import { createContext } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        await runChat (prompt)
    }
    onSent("what is react js?")
    
    const contextValue = {

     }   
        return (
            <ContextProvider value = {contextValue}>
                {props.children}
            </ContextProvider>
        )   
}
export default ContextProvider;