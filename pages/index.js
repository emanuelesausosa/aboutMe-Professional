/* eslint linebreak-style: ["error", "windows"] */
import Head from 'next/head';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <div className="jumbotron jumbotron-fluid">
      <h1>Emanuel Sosa</h1>
    </div>
  </div>
);

export default withLayout(Index);
