import React, { PureComponent, Fragment } from 'react';
import SectionTitle from '../SectionTitle';
import { AuthConsumer } from '../../contexts/Auth';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) => (
          <Fragment>
            {isAuthorized && (
              <Fragment>
                <SectionTitle className="header__title">Header</SectionTitle>
                <div className="header__content">
                  <div className="header-menu">
                    <p className="header-menu__email header-email t-header-email">
                      {email}
                    </p>
                    <button
                      onClick={logout}
                      className="header-menu__button t-logout button"
                    >
                      Выйти
                    </button>
                  </div>
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </AuthConsumer>
    );
  }
}

export default Header;
