import React from 'react';
import {
  LoginBannerComponent,
  LoginButtontsComponent,
  LoginFormComponent,
  LoginTitleComponent,
  LoginUtilsComponent,
} from '../components';
import '../styles/Login/index.css';
export function ItchatLogin() {
  return (
    <div className='application-login'>
      <LoginBannerComponent />
      <div className='login-container'>
        <LoginTitleComponent />
        <LoginFormComponent />
        <LoginUtilsComponent />
        <LoginButtontsComponent />
      </div>
    </div>
  );
}
