import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  useEffect(() => {
    setUserName(prompt('Enter your name..'))
  }, [])
  //console.log(input);
  //console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });//add fields in firebase DB

    setInput('');
  }

  return (
    <div className="app">
      <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
      <h1>Chart with Vinoth..</h1>
      <h2>Hi!..{userName} Wellcome.. </h2>
      <form className="app__form">
        <FormControl className="app__formControl">

          <Input className="app__input" placeholder="Aa" value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app__iconButton" variant="contained" color="primary" type="submit" onClick={sendMessage} disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* message area */}
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} userName={userName} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
