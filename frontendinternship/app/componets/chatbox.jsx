// import { useState } from 'react'; // React is automatically available in Next.js
import styles from '../styles/chatbox.module.css'; // Assuming you have a styles folder for CSS
// // Import FontAwesomeIcon and other images as needed

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { text: 'Hello!', user: 'Alice', timestamp: '09:00 AM' },
//     { text: 'Hi there!', user: 'Bob', timestamp: '09:05 AM' },
//     { text: 'How are you?', user: 'Alice', timestamp: '09:10 AM' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim() === '') return;

//     const message = {
//       text: newMessage,
//       user: 'You',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//     };

//     setMessages([...messages, message]);
//     setNewMessage('');
//   };

//   return (
//     <div className={styles.chat-container}>
//       {/* Your JSX code remains unchanged */}
//     </div>
//   );
// }

// export default Chat;
import { useState } from 'react'; // React is automatically available in Next.js
// import '../styles/chat.css'; // Assuming you have a styles folder for CSS
// Import FontAwesomeIcon and other images as needed

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'when will the event held!', user: 'Alice', timestamp: '09:00 AM' },
    { text1: 'Tomorrow by 4', user: 'Bob', timestamp1: '09:05 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      user: 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <>
    <div className={styles.chatcontainer}>
      <div className={styles.chat}>
        <div className={styles.lit}>
          <h3>Ironmen</h3>
          <span>
            {/* <FontAwesomeIcon icon={faXmark} className="icon" /> */}
          </span>
        </div>
        <div className={styles.g}>
          <h4>Today</h4>
        </div>
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === 'You' ? 'sent' : 'received'}`}
          >
            <div className={styles.messagecontent}>{message.text}</div>
            <div className={styles.messagetimestamp}>{message.timestamp}</div>
            <div className={styles.messagecontent1}>{message.text1}</div>
            <div className={styles.messagetimestamp1}>{message.timestamp1}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputcontainer}>
        <input
          type="text"
          placeholder="Type a here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        {/* <Image src="/G1.svg" alt="logo" width={10} height={100} />
         <button>send</button> */}
      </div>
    </div>
    </>
  );
}

export default Chat;
