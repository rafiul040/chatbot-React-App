
// import './App.css'
import { useState } from "react"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"

function App() {

  const [theme, setTheme] = useState("Light Mode")

  const toggleTheme = () => {
    if(theme === "Light Mode"){
      setTheme("Dark Mode");
    }
    else{
      setTheme("Light Mode");
    }
  }


  return (
    <div style={{
      backgroundColor: theme === "Light Mode" ? "white" : 'black',
      color: theme === "Light Mode" ? "black" : "white", 
    }}>

    <h1>Current Theme: {theme}</h1>
    <button onClick={toggleTheme}>Toggle Theme</button>

    <ChatInput/>
    <ChatMessage 
    message="Hello Chatbot" 
    sender="user"
    />
    <ChatMessage 
    message="Hello! How can I Help You?" 
    sender="robot"
    />
    <ChatMessage 
    message="Can you get me todays date?" 
    sender="user"
    />
    <ChatMessage 
    message="Today is September 27" 
    sender="robot"
    />

    </div>
  )
}




export default App
