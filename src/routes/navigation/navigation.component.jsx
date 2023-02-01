import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as MotorwayLogo } from '../../assets/motorway-logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <MotorwayLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            GALLERY
          </Link>
          <Link className='nav-link' to='/sign-up'>
            SIGN UP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
