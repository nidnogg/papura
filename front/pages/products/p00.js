import Layout from '../components/layout';
import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from 'react-image-gallery';
import React, { useState, useEffect } from 'react';


const images = [
  {
    original: 'https://i.imgur.com/2XMmOfg.jpg',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://i.imgur.com/v6N9Yvg.jpg',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://i.imgur.com/0lAZgyj.jpg',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://i.imgur.com/xB53kQz.png',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://i.imgur.com/x4Ag5ih.png',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },




];

const ProductPage = () => {
  return (
    <Layout>
      <ImageGallery items={images} />
      <div className="sidebar">
        <h1 className="header">Preto</h1>
        <h1 className="header">Descrição</h1>

      </div>
    </Layout>
  );
}

export default ProductPage;