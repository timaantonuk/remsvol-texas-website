import React from 'react';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__wrapper flex justify-between items-center bg-[#ebe0bf] flex-row h-28'>
        <div className='navigation__items '>
          <ul className='flex flex-row gap-4'>
            <li className='navigation__item'>
              <a>About us</a>
            </li>
            <li className='navigation__item'>
              <a>Services</a>
            </li>
            <li className='navigation__item'>
              <a>Reviews</a>
            </li>
            <li className='navigation__item'>
              <a>Contact us</a>
            </li>
          </ul>
        </div>

        <div className='navigation__logo w-40'>
          <a href='#'>
            <img src='/img/logo.png' alt='Remsvol' />
          </a>
        </div>

        <div className='navigation__icons flex gap-4 items-center'>
          <a href='#'>
            <img className='h-6' src='/img/icons/mail-icon.png' alt='mailto' />
          </a>
          <a href='#'>
            <img
              className='h-6'
              src='/img/icons/instagram-icon.png'
              alt='instagram'
            />
          </a>
          <a href='#'>
            <img
              className='h-6'
              src='/img/icons/facebook-icon.png'
              alt='mailto'
            />
          </a>
          <a href='#'>
            <img
              className='h-6'
              src='/img/icons/youtube-icon.png'
              alt='mailto'
            />
          </a>
          <a href='#'>
            <img className='h-6' src='/img/icons/phone-icon.png' alt='mailto' />
          </a>

          <div className='navigation__button bg-[#c09559] p-3 rounded-lg'>
            <a>Application</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
