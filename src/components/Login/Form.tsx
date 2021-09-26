import React from 'react';
import '../../styles/Login/Login-form.css';
export function LoginFormComponent() {
  return (
    <div className='login-form-container'>
      <div>
        <input className='login-input' type='email' />
        <span className='login-span-input'>Email</span>
      </div>
      <br />
      <div>
        <input className='login-input' type='password' />
        <span className='login-span-input'>Password</span>
        <img
          className='eye-of-password'
          src='https://cdn.discordapp.com/attachments/868104650228891648/890780409254797342/unknown.png'
          width='34px'
          alt=''
        />
      </div>
    </div>
  );
}
