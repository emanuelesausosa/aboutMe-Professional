/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function withLayout(BaseComponent) {
  class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <BaseComponent {...this.props} />
        </div>
      );
    }
  }

  App.getInitialProps = ctx => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
}

export default withLayout;
