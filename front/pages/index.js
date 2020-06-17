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
      <section className="main grid">

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square product-col-0">
              </div>
            </a>
        </Link>

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square product-col-1">
              </div>
            </a>
        </Link> 

        <Link href="/products/product-0">
            <a className="">
              <div className="product-square product-col-2">
              </div>
            </a>
        </Link>
     
      </section>
    </Layout>
  );
}

export default Home;