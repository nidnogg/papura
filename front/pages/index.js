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

        <Link href="/products/product-0">
            <a className="column" href="prod1">
              <img className="line-square" src="" alt="arti"/>
            </a>
        </Link>

        <Link href="/products/product-0">
            <a className="column" href="prod2">
              <img className="line-square" src="" alt="mini"/>
            </a>
        </Link> 

        <Link href="/products/product-0">
            <a className="column" href="prod3">
              <img className="line-square" src="" alt="trad"/>
            </a>
        </Link>


      </section>
    </Layout>
  );
}

export default Home;