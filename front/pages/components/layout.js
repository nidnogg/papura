import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;