import React from 'react';

export default function MessageComponent({
  title,
  content,
  url,
}: {
  title: string;
  content: string;
  url: string;
}) {
  return (
    <div>
      <div className='message'>
        <img className='message-img' src={url} alt='' />
        <div className='message-username'>{title}</div>
        <div className='message-content'>{content}</div>
      </div>
    </div>
  );
}
