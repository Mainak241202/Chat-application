import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // ✅ Correct import for React Router v5

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [chats, setChats] = useState([]);
    const [notification, setNotification] = useState([]);
    
    const history = useHistory(); // ✅ Ensure useHistory() is called inside the component

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if (!userInfo && history) { // ✅ Check if history exists before using push()
            history.push('/');
        }
    }, [history]);

    return (
        <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats, notification, setNotification }}>
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatContext);
}

export default ChatProvider;
