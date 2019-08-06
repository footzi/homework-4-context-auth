import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const defaultUser = {
  email: 'stu@dent.com',
  password: '123'
}

// const defaultUser = {
//   email: '1',
//   password: '1'
// }

class AuthProvider extends PureComponent {
  state = {email: '', authorizeError: '', isAuthorized: false}
 
  authorize(email, password) {
    if (email === defaultUser.email && password === defaultUser.password) {
      this.setState({
        email,
        isAuthorized: true,
        authorizeError: ''
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }

  logout() {
    this.setState({
      isAuthorized: false
    })
  }

  getProviderValue() {
    const { email, isAuthorized, authorizeError } = this.state;

    return {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize.bind(this),
      logout: this.logout.bind(this)
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

export { AuthProvider, AuthConsumer };
