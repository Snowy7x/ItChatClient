import React from 'react';
import '../../../styles/App/App-servers.css';
import ServerComponent from './ServerComponent';
import HomeComponent from './HomeComponent';
import AddComponents from './AddComponents';
export function ApplicationServers() {
  return (
    <div className='sidebar-servers'>
      <div className='sidebar-container'>
        <HomeComponent active={false} />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/859056327706542092/890354646948905001/unknown.png'
          active={true}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357327524417548/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />{' '}
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357327524417548/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />{' '}
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357327524417548/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />{' '}
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357327524417548/unknown.png'
          active={false}
        />
        <ServerComponent
          url='https://cdn.discordapp.com/attachments/761543226967982081/890357386718642206/unknown.png'
          active={false}
        />
        <AddComponents active={false} />
      </div>
    </div>
  );
}
