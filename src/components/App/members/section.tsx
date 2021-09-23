import React from 'react';
import { members } from '../../../mocks';
export default function SectionComponent() {
  return (
    <div className='roles-container'>
      {members.map((role) => {
        return (
          <div>
            <div className='role-name'>{role.name}</div>
            {role.members.map((member) => {
              return (
                <div className='flex-member'>
                  <img alt='' src={member.icon} className='member-avatar' />
                  <div className='member-name'>{member.username}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
