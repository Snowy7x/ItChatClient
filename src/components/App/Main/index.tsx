import React from 'react';
import '../../../styles/App-main.css';
import UserMainComponent from './user';
import TitleComponent from './title';
import ChannelsCompoent from './channels';
export function ApplicationMain() {
  return (
    <div className='sidebar-main'>
      <TitleComponent />
      <UserMainComponent />
      <ChannelsCompoent />
    </div>
  );
}
