/* eslint linebreak-style: ["error", "windows"] */
import Link from 'next/link';

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link prefetch href="/">
      <a className="navbar-brand">Home</a>
    </Link>
  </div>
);

export default Header;
