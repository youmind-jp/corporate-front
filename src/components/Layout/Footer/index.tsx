import React, { FC } from 'react';
import Logo from '../Header/Logo';

const Footer: FC = () => {
  return (
    <footer className="pt-16 pb-1 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="lg:col-span-4 md:col-span-6 col-span-6 text-center mb-2">
          <h3 className="mb-2">
            <Logo />
          </h3>
          <p>
            <small>&copy; YouMind All Rights Reserved</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
