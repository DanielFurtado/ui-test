import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as MotorwayLogo } from '../../assets/motorway-logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <header className='navigation' role='banner'>
        <nav className='nav-container'>
          <NavLink className='logo-container' to='/'>
            <MotorwayLogo className='logo' />
          </NavLink>
          <ul className='nav-links-container' role='menubar'>
            <li role="none">
              <NavLink to='/' className='nav-link' role='menuitem'>
                Gallery
              </NavLink>
            </li>
            <li role="none">
              <NavLink to='/sign-up' className='nav-link' role='menuitem'>
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
