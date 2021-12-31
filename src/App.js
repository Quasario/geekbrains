import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Message } from './components/message/Messages';
import { Chats } from './components/chats/Chats';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    const lastSender = messageList[messageList.length - 1]?.author;
    if (lastSender != 'BOT' && lastSender != undefined) {
      setTimeout(() => {
        handleAddMessage({ text: `${lastSender}, привет!`, author: "BOT", id: `msg-${Date.now()}` })
      }, 1500)
    }
  }, [messageList]);

  return (
    <div className="App">
      <Chats />
      <div>
        <Form onPrintMessage={handleAddMessage} />
        <Message messages={messageList} />
      </div>
    </div>
  );
}

export default App;
