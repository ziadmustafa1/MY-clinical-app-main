import { Link } from "react-router-dom"
import chat from "../../assets/Chat.svg"
const Chat = () => {
  return (
    <div className="fixed bottom-16 right-4 z-20">
      <Link to="chat">
      <img src={chat} alt="logo" />
      </Link>
    </div>
  )
}

export default Chat
