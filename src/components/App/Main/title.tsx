import React from 'react';

export default function TitleComponent() {
  return (
    <div>
      <img
        className='server-banner'
        src='https://cdn.discordapp.com/attachments/859056327706542092/890583256427270154/unknown.png'
        alt=''
      />
      <div className='server-menu'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 12H21'
            stroke='white'
            stroke-opacity='0.8'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M3 6H21'
            stroke='white'
            stroke-opacity='0.8'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M3 18H21'
            stroke='white'
            stroke-opacity='0.8'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
      <div className='server-title'>ItChat Team</div>
    </div>
  );
}
