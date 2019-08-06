import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

class App extends PureComponent {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {({ isAuthorized, authorize, authorizeError }) => (
            <Layout header={<Header />} footer={<Footer/>}>
              {isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )}
            </Layout>
          )}
        </AuthConsumer>
      </AuthProvider>
    );
  }
}

export default App;
