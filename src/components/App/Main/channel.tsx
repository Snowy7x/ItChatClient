import React from 'react';
export default function ChannelComponent({ channels }: { channels: any[] }) {
  return (
    <div>
      <br />
      {channels.map((category) => (
        <div>
          <div className='flex-category'>
            <div className='category-arrow'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 14L20 9L15 4'
                  stroke='white'
                  stroke-opacity='0.33'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20'
                  stroke='white'
                  stroke-opacity='0.33'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <div className='category-title'>{category.name}</div>
            <div className='category-add-button'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 5V19'
                  stroke='white'
                  stroke-opacity='0.22'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5 12H19'
                  stroke='white'
                  stroke-opacity='0.22'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
          {(category.channels as any[]).map((channel) => (
            <div
              className={`channel-flex ${
                channel.active ? 'active-channel' : ''
              }`}
            >
              <div className='channel-hash'>
                {channel.type === 'voice' ? (
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11 5L6 9H2V15H6L11 19V5Z'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M15.54 8.45999C16.4773 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4773 14.5924 15.54 15.53M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07V4.92999Z'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                ) : (
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 9H20'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M4 15H20'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M10 3L8 21'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M16 3L14 21'
                      stroke='white'
                      stroke-opacity='0.19'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                )}
              </div>
              <div className='channel-title'>{channel.name}</div>
              <div className='channel-noti'></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
