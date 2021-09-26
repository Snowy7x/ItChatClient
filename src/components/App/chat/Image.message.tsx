import React from 'react';

export default function ImageMessageComponent() {
  return (
    <div>
      <div className='message'>
        <img
          className='message-img'
          src='https://media.discordapp.net/attachments/890651045246681139/890667549337997374/unknown.png?width=101&height=101'
          alt=''
        />
        <div className='message-content'>
          <div className='image-title'></div>
          <img
            className='message-image'
            src='https://cdn.discordapp.com/attachments/859056327706542092/891629889776656416/unknown.png'
            alt=''
          />
        </div>
        <div className='message-username'>The maestro</div>
      </div>
    </div>
  );
}
