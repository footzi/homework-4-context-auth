import React, { PureComponent, Fragment } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle from '../SectionTitle';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) => (
          <Fragment>
            <SectionTitle className="header__title">Footer</SectionTitle>
            <p className="footer-message t-footer">
              {isAuthorized ? `Вы вошли как ${email}` : 'Вы гость в этой системе'}
            </p>
          </Fragment>
        )}
      </AuthConsumer>
    );
  }
}

export default Footer;
