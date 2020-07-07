import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div> 
      <nav className="navbar">
        <section>
          <Link href="/about">
            <a className="nav-link">SOBRE</a>
          </Link>
          <Link href="/">
            <a className="nav-link">LOJA</a>
          </Link>
          <Link href="/">
            <a className="nav-link">CARRINHO
            <img className="cart" src="/cart.png" alt="logo.png"/>
            </a>
          </Link>
        </section>

        <img className="logo" src="/logo.png" alt="logo.png"/>
        
        <section>
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
        </section>
      </nav>
      {children}
    </div>
  );
}

export default Layout;