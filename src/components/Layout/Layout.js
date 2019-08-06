import React, { PureComponent, Fragment } from 'react';
import Main from '../Main';
import LoginForm from '../LoginForm';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, Footer, children } = this.props;
    // const { footer } = this.props;
    // console.log(this.props)

    return (
      <Fragment>
        {header()}
        <Main>
          {children}
        </Main>
        {/* <Footer /> */}
      </Fragment>
    )
  }
}

export default Layout;
