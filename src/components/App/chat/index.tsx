import React from 'react';
import ChatBoxComponent from './chatbox';
import MessagesComponent from './messages';
import TitleComponent from './title';
import '../../../styles/App/App-chat.css';
export function ApplicationChat() {
  return (
    <div className='application-chat'>
      <TitleComponent />
      <ChatBoxComponent />
      <MessagesComponent />
    </div>
  );
}
