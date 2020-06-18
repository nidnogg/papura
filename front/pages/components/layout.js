import Link from 'next/link';

const Layout = ({children}) => {
  return (

    <div>
    {/*<div style={{paddingLeft: `calc(100vw - 100%)`}}>*/}
      <nav>
        <Link href="/about">
          <a className="nav-link">SOBRE</a>
        </Link>
        <Link href="/">
          <a className="nav-link">LOJA</a>
        </Link>
        <Link href="/">
          <a className="nav-link">CART</a>
        </Link>
      </nav>
      <img className="logo" src="/logo.png" alt="logo.png"/>
      <nav>
        <Link href="/">
          <a>
            <img className="social" src="/social/face.png" alt="facebook!"/>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img className="social" src="/social/insta.png" alt="instagram!"/>  
          </a>
        </Link>
        <Link href="/">
          <a>
            <img className="social" src="/social/pin.png" alt="pinterest!"/>
          </a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;