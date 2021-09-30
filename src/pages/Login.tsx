import React from 'react';
import '../styles/Login/index.css';
export function ItchatLogin() {
  const [eye, setEye] = React.useState(false);
  return (
    <div className='application-login'>
      <div className='login-container'>
        <div className='login-title'>Login</div>
        <div className='login-forms'>
          <div>
            <div className='login-input-container'>
              <span className='login-start-span'></span>
              <input className='login-input' type='email' placeholder='Email' />
              <span className='login-end-span'>
                <img
                  src='https://cdn.discordapp.com/attachments/859056327706542092/893160934955184178/unknown.png'
                  alt=''
                  width='34px'
                />
              </span>
            </div>
            <div className='login-input-container'>
              <span className='login-start-span'></span>
              <input
                className='login-input'
                type={`${eye ? '' : 'password'}`}
                placeholder='password'
              />
              <span
                onClick={() => {
                  setEye(!eye);
                }}
                className='login-end-span'
              >
                <img
                  src='https://cdn.discordapp.com/attachments/859056327706542092/893160966651539507/unknown.png'
                  alt=''
                  width='34px'
                />
              </span>
            </div>
            <div className='login-forgot-password'>Forgot password?</div>
          </div>
        </div>
        <div className='login-buttons-container'>
          <div>
            <div className='login-button'>
              <svg
                width='56'
                height='56'
                viewBox='0 0 56 56'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <rect width='56' height='56' fill='url(#pattern0)' />
                <defs>
                  <pattern
                    id='pattern0'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                  >
                    <use xlinkHref='#image0' transform='scale(0.0111111)' />
                  </pattern>
                  <image
                    id='image0'
                    width='90'
                    height='90'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACAUlEQVR4nO3aQYvTQACG4W9WyOD24MVLf1IRwfVoQejFg2DRg+BFyF0pS9hLD8uKXqQIeov+qgpa3KF0Zw+GNdYm25jprGbf55gMw/ASQjKJBAAAAAAAAAAAAAAAAADoCHPVC/hXTCaTm71e71DSUNIPSSfOuZfj8diFmH8vxCRdUER+JKkn6bak59baj1mW2RDzE1qS995IerDh1CBUbEJLMsZ4Sb7idJDYhP7luOZc69iELjjnXkjKa4a0is1TR8lsNkvm8/kHSXerxnjvv1hr741Go9MmcxN6za5iE3qDXcQmdIXQsQldI2RsQl8iVGxCbyFEbEJvqW1sQjfQJvZvoafT6b73/pUxZijp1m6Wey3kSZLcL8defwWfGGMei8htDZxzWfnAReg0TfckPYy+pI4yxgyLppLYVIqmfEWfSXp7hWvpmndFU0lrV/RisXgm6UjS19ir6pjPSZI8LR/g8a6BYI93qMYLSwS8gkfAplIEbJNGwMZ/BHzKioCPsxHs8neDG61X1xFZltnlcvlJ0p2aYbm19qBpZIlNpQvW2teSBjVD/thjboJbh35uEff7/W+S9iuGtIoscUWXVbXInXN/dbvYZvJrJU3TM+/9+w2ncufcQYi//gldWK1WT7z3bySdSvou6TBUZGxQ/P0PAAAAAAAAAAAAAAAAAP+hcyKFUOsW1F0bAAAAAElFTkSuQmCC'
                  />
                </defs>
              </svg>
            </div>
            <div className='login-button'>Create an account</div>
          </div>
        </div>
      </div>
    </div>
  );
}
