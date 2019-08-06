import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';

class Main extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <main className="main main--with-header main--with-footer">
        <SectionTitle className="main__title ">Main</SectionTitle>
        {children}
      </main>
    );
  }
}

export default Main;
