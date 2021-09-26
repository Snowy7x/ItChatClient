import React from 'react';
import '../../../styles/App/App-members.css';
import SectionComponent from './section';
export function ApplicationMembers() {
  return (
    <div className='application-members'>
      <div className='search-container'>
        <span className='search-span'>
          <svg
            className='search-svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.2635 20.526C12.5407 20.5255 14.7523 19.7632 16.5461 18.3605L22.1859 24L24 22.186L18.3602 16.5465C19.7637 14.7526 20.5265 12.5407 20.5271 10.263C20.5271 4.60423 15.9226 0 10.2635 0C4.60448 0 0 4.60423 0 10.263C0 15.9217 4.60448 20.526 10.2635 20.526ZM10.2635 2.56575C14.5088 2.56575 17.9612 6.01796 17.9612 10.263C17.9612 14.508 14.5088 17.9602 10.2635 17.9602C6.01828 17.9602 2.56588 14.508 2.56588 10.263C2.56588 6.01796 6.01828 2.56575 10.2635 2.56575Z'
              fill='white'
              fill-opacity='0.42'
            />
            <path
              d='M12.075 8.44904C12.5613 8.93653 12.8294 9.58053 12.8294 10.263H15.3953C15.3964 9.58878 15.2639 8.921 15.0054 8.29828C14.7469 7.67556 14.3675 7.11026 13.8891 6.63505C11.9468 4.69535 8.57903 4.69535 6.63794 6.63505L8.44945 8.4516C9.42449 7.47919 11.1051 7.48175 12.075 8.44904Z'
              fill='white'
              fill-opacity='0.42'
            />
          </svg>
        </span>
        <input className='search' placeholder='Search' />
      </div>
      <div className='sidebar-members'>
        <SectionComponent />
      </div>
    </div>
  );
}
