import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/message/Message';
import { Form } from './components/form/Form';

function App() {
  const givenText = "Some text"

  const [messageList, setMessageList] = useState([]);
  let [botMessage, setBotMessage] = useState('');

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    if (messageList.length > 0) {
      const timer = setTimeout(() => {
        setBotMessage(() => (`${messageList[messageList.length - 1].author}, привет!`));
      }, 1500)
    }
  }, [messageList]);

  return (
    <div className="App">

      <Form onPrintMessage={handleAddMessage} />
      {messageList.map(({ text, author }) => (
        <div>
          <div>
            {author}: {text}
          </div>
          {botMessage}
        </div>

      ))}

    </div>
  );
}

export default App;
