import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div className="container">
    {/*<div style={{paddingLeft: `calc(100vw - 100%)`}}>*/}
      <nav>
        <Link href="/">
          <a className="nav-link">SOBRE</a>
        </Link>
        <Link href="/">
          <a className="nav-link">LOJA</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">CART</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;