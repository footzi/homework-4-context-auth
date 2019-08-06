import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    // Не пропсы а authConsumer!!!
    console.log(this.props)
    return <h1>Footer</h1>;
  }
}

export default Footer;
