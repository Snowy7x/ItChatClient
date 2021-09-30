import React from 'react';
import MessageComponent from './message';
import ImageMessageComponent from './Image.message';
import FileMessageComponent from './File.message';
import MessagesTitleComponent from './MessagesTitle';
export default function MessagesComponent() {
  return (
    <div
      className='messages-container'
      onLoad={(e) => {
        e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
      }}
    >
      <div className='messages'>
        <div>
          <MessagesTitleComponent />
          <MessageComponent
            url='https://media.discordapp.net/attachments/890651045246681139/890667549337997374/unknown.png?width=101&height=101'
            title='The Maestro'
            content='s s s '
          />
          <ImageMessageComponent />
          <FileMessageComponent title='amoung_us.exe' size='10MB' />
        </div>
      </div>
    </div>
  );
}
