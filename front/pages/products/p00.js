import Layout from '../components/layout';
import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from 'react-image-gallery';
import React, { useState, useEffect } from 'react';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const ProductPage = () => {
  return (
    <Layout>
      <ImageGallery items={images} />
      <div className="sidebar">
        <h1 className="prod-header">Nome do modelo</h1>
      </div>
    </Layout>
  );
}

export default ProductPage;