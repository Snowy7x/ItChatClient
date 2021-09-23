import React from 'react';

export default function AddComponents({ active }: { active: boolean }) {
  return (
    <div className='sidebar-servers-server'>
      <svg
        className={`server-icon-behavior ${active ? 'server-icon-active' : ''}`}
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M25 18V32'
          stroke='#5C53FB'
          stroke-opacity='0.51'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M18 25H32'
          stroke='#5C53FB'
          stroke-opacity='0.51'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <circle cx='25' cy='25' r='25' fill='white' fill-opacity='0.02' />
      </svg>
    </div>
  );
}
