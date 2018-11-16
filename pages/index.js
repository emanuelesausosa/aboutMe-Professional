/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import Head from 'next/head';
import withLayout from '../lib/withLayout';

const Index = ({ user }) => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <div className="jumbotron jumbotron-fluid">
      <h1>Emanuel Sosa</h1>
      <p>





Emai:
{user.email}
      </p>
    </div>
  </div>
);

Index.getInitialProps = async ({ query }) => ({ user: query.user });

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default withLayout(Index);
