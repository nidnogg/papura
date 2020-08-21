import Head from 'next/head';
import Link from "next/link";
import Layout from './components/layout';
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  return (
    <Layout>
      <Head>

        <title>Papura Cadernos</title>
  
      </Head>
      <section className="row">

        <Link href="/products/p0">
            <a className="column">
              <img className="line-square" src="./assets/main/mini.png" alt="compacto"/>
            </a>
        </Link>

        <Link href="/products/p1">
            <a className="column">
              <img className="line-square trad" src="./assets/main/trad.png" alt="tradicional"/>
            </a>
        </Link> 

        <Link href="/products/p2">
            <a className="column">
              <img className="line-square" src="./assets/main/arti.png" alt="artistico"/>
            </a>
        </Link>


      </section>
    </Layout>
  );
}

export default Home;