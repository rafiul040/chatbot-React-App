export default function ChatMessage({message, sender}){
    

    return(
        <div>
            {sender === 'robot' && (
                <img src="./assets/robot.png" 
                width={150} 
                style={{background: "black"}}/>
                )}
        {message}



        {sender === 'user' && (
            <img src="./assets/user.png" 
            width={150} 
            style={{background: "black"}}/>
            )}
        </div>
    )
}