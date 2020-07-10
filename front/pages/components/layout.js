import Link from 'next/link';
import {useEffect, useState, useRef} from 'react';
import { gsap } from "gsap";
import Hamburger from './hamburger';


const Layout = ({children}) => {
  const [isMenuOpen, setMenuOpen] = useState(0);
  const tl = useRef(0);
  const menu = useRef(0);
  
  const setMenuOpenCallback = (value) => {
    setMenuOpen(value);
  }

  const isMenuOpenCallback = () => {
    return isMenuOpen;
  }

  useEffect(() => {
    if(!tl.current) {
      tl.current = gsap.timeline({defaults: {duration: 0.2, ease:"expo"} })
        	             .to(menu.current, { duration: 0.0001, zIndex: 9997, ease:"none"})
                       .to(menu.current, { duration: 0.377, opacity: 1, ease:"expo"})
           
    }
  }, []); // crap requirement for hooks

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);  // wonder if isMenuOpen is also required for hooks
  return (
    <div> 
      <div className="fixed-navbar">
        <nav className="navbar">
          <section className="mobile-menu" ref={menu}>

            <section className="mobile-nav-items">
              <Link href="/about">
                <a className="nav-link">SOBRE</a>
              </Link>
              <br />
              <br />

              <Link href="/">
                <a className="nav-link">LOJA</a>
              </Link>
              <br />
              <br />

              <Link href="/cart">
                <a className="nav-link">CARRINHO
                <img className="cart" src="/cart.png" alt="logo.png"/>
                </a>
              </Link>
              <br />
              <br />

            </section>

            <section className="mobile-nav-social">
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

            
          </section>

          <section className="nav-items">
            <Link href="/about">
              <a className="nav-link">SOBRE</a>
            </Link>
            <Link href="/">
              <a className="nav-link">LOJA</a>
            </Link>
            <Link href="/cart">
              <a className="nav-link">CARRINHO
              <img className="cart" src="/cart.png" alt="logo.png"/>
              </a>
            </Link>
          </section>

          <img className="logo" src="/logo.png" alt="logo.png"/>
          
          <section className="nav-social">
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

          <Hamburger isMenuOpen={isMenuOpenCallback} setMenuOpen={setMenuOpenCallback} />
        </nav>
      </div>
      {children}
    </div>
  );
}

export default Layout;