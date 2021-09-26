import React from 'react';
import MessageComponent from './message';
import ImageMessageComponent from './Image.message';
import FileMessageComponent from './File.message';
export default function MessagesComponent() {
  return (
    <div
      className='messages-container'
      onLoad={(e) => {
        e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
      }}
    >
      <div>
        <MessageComponent
          url='https://media.discordapp.net/attachments/890651045246681139/890667549337997374/unknown.png?width=101&height=101'
          title='The Maestro'
          content='s s s '
        />
        <ImageMessageComponent />
        <FileMessageComponent />
      </div>
    </div>
  );
}
