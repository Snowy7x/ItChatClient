import React from 'react';
import {
  ApplicationServers,
  ApplicationMain,
  ApplicationMembers,
  ApplicationChat,
} from '../components';

export function ItchatApplication() {
  return (
    <div className='application'>
      <ApplicationServers />
      <ApplicationMain />
      <ApplicationMembers />
      <ApplicationChat />
    </div>
  );
}
