import { Image } from "@mantine/core"
import "./Chatbot.css"
import arrowDown from "../../assets/keyboard_arrow_down_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
import arrowUp from "../../assets/keyboard_arrow_up_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
import { useState } from "react"
import axios from "axios"
const Chatbot = () => {
    //input-ul utilizatorului
    const [value, setValue] = useState<string>("");

    //pentru mesajul utilizatorului
    const [messages, setMessages] = useState([
        { type: "bot", text: "Bună! Cu ce te pot ajuta?" }
    ]);
    //popup
    const [showChatbot, setShowChatbot] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userText = value;

        //mesajul utilizatorului
        setMessages(prev => [...prev, { type: "user", text: userText }]);
        setValue("");
        try {
            const response = await axios.post("https://invingem-impreuna-backend-production.up.railway.app/chatbot", {
                question: value,
            });
            setMessages(prev => [...prev, { type: "bot", text: response.data }]);
        } catch (error) {
            setMessages(prev => [...prev, { type: "bot", text: "A apărut o eroare." }]);
        }

    }

    return (
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
            <button onClick={() => setShowChatbot((prev: any) => !prev)} id="chatbot-toggler">
                <span className="material-symbols-rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /></svg>
                </span>

            </button>
            <div className="chatbot-popup">
                {/* chatbot header */}
                <div className="chat-header">
                    <div className="header-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg>
                        <h2 className="logo-text">
                            Chatbot
                        </h2>
                    </div>
                    <button onClick={() => setShowChatbot((prev: any) => !prev)} className="material-symobols-rounded" ><Image src={arrowDown} /></button>
                </div>
                {/* chatbot body */}
                <div className="chat-body">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.type === "user" ? "user-message" : "bot-message"}`}
                        >
                            {msg.type === "bot" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg>
                            )}
                            <p className="message-text">{msg.text}</p>
                        </div>
                    ))}
                </div>
                {/* chatbot footer */}
                <div className="chat-footer">
                    <form className="chat-form" onSubmit={handleSubmit}>
                        <input
                            placeholder="Mesaj..."
                            className="message-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit" className="material-symobols-rounded">
                            <Image src={arrowUp} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Chatbot;