import React from 'react';
import ChannelComponent from './channel';
import { channels } from '../../../mocks';
export default function ChannelsComponent() {
  return <ChannelComponent channels={channels} />;
}
