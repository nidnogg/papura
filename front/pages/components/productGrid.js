import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';

const Square = props => {

  const {line, id} = props;
  return (
    <Link href={`/products/p${line}${id}`}>
      <div className="square">
      </div>
    </Link>
  );
}
const ProductGrid = props => {
  const {line} = props;
  return (
    <div className='square-grid'>
      <Square line={line} id={0}></Square>
      <Square line={line} id={1}></Square>
      <Square line={line} id={2}></Square>
      <Square line={line} id={3}></Square>
      <Square line={line} id={4}></Square>
      <Square line={line} id={5}></Square>
      <Square line={line} id={6}></Square>
      <Square line={line} id={7}></Square>
      <Square line={line} id={8}></Square>
      <Square line={line} id={9}></Square>
      <Square line={line} id={10}></Square>
      <Square line={line} id={11}></Square>
    </div>
  );
}

export default ProductGrid;