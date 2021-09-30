import React from 'react';

export default function FileMessageComponent({
  title,
  size,
}: {
  title: string;
  size: string;
}) {
  return (
    <div>
      <div className='message'>
        <img
          className='message-img'
          src='https://media.discordapp.net/attachments/890651045246681139/890667549337997374/unknown.png?width=101&height=101'
          alt=''
        />
        <div className='message-content'>
          <div className='file-message-container'>
            <div>
              <svg
                className='message-text-file'
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16L28 4Z'
                  stroke='white'
                  stroke-opacity='0.54'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M28 4V16H40'
                  stroke='white'
                  stroke-opacity='0.54'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M32 26H16'
                  stroke='white'
                  stroke-opacity='0.54'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M32 34H16'
                  stroke='white'
                  stroke-opacity='0.54'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M20 18H18H16'
                  stroke='white'
                  stroke-opacity='0.54'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <div>
              <div className='file-message-title'>{title}</div>
              <div className='file-message-size'>{size}</div>
            </div>
            <svg
              className='download-file-button'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15'
                stroke='white'
                stroke-opacity='0.5'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7 10L12 15L17 10'
                stroke='white'
                stroke-opacity='0.5'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12 15V3'
                stroke='white'
                stroke-opacity='0.5'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
        <div className='message-username'>The maestro</div>
      </div>
    </div>
  );
}
