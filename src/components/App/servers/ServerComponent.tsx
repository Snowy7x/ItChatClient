import React from 'react';

export default function ApplicationServerComponent({
  url,
  active,
}: {
  url: string;
  active: boolean;
}) {
  return (
    <div className='sidebar-servers-server'>
      <img
        className={`server-icon-behavior ${active ? 'server-icon-active' : ''}`}
        src={url}
        alt=''
      />
    </div>
  );
}
