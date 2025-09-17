
// import './App.css'
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"
function App() {


  return (
    <>

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
    {/* <ChatMessage message="How "/> */}

    </>
  )
}




export default App
