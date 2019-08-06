import React, { PureComponent, Fragment } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const classWithHeader = header ? 'main--with-header' : '';
    const classWithFooter = footer ? 'main--with-footer' : '';

    return (
      <Fragment>
        {header && <header className="header">{header}</header>}
        <main className={`main ${classWithHeader} ${classWithFooter}`}>
          {children}
        </main>
        {footer && <footer className="footer">{footer}</footer>}
      </Fragment>
    );
  }
}

export default Layout;
