import React from 'react';

export default function HomeComponent({ active }: { active: boolean }) {
  return (
    <div className='sidebar-servers-server'>
      <svg
        width='55'
        height='55'
        viewBox='0 0 55 55'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='27.5' cy='27.5' r='27.5' fill='white' />
        <path
          d='M27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0ZM27.5 12.6724L40.9277 23.1091V42.3276H31.6894V30.726H23.3106V42.3276H14.0723V23.1091L27.5 12.6724Z'
          fill='#5C53FB'
        />
      </svg>

      <div className='divider-homeicon'>
        <svg
          height='1'
          viewBox='0 0 55 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            y1='0.5'
            x2='55'
            y2='0.5'
            stroke='white'
            stroke-opacity='0.07'
          />
        </svg>
      </div>
    </div>
  );
}
