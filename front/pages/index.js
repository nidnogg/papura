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
      <section className="grid-container">

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square grid-item">
              </div>
            </a>
        </Link>

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square grid-item">
              </div>
            </a>
        </Link> 

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square grid-item">
              </div>
            </a>
        </Link>
     
      </section>
    </Layout>
  );
}

export default Home;