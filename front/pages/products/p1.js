import Layout from '../components/layout';
import Link from "next/link";




const Square = props => {

  const {id} = props;
  const line = 0;
  return (
    <Link href={`/products/p${line}${id}`}>
      <img className="square" src={`/trad/${id}.jpg`} alt="notebook"></img>   
    </Link>
  );
}

const Product = () => {
  return (
    <Layout>
      <h1 className="header">Modelos a partir de 20 reais, 60 páginas:</h1>

      <div className='square-grid'>
        <div className="square-row">
          <Square id={0}></Square>
          <Square id={1}></Square>
          <Square id={2}></Square>
          <Square id={3}></Square>
        </div>

        <div className="square-row">
          <Square id={4}></Square>
          <Square id={5}></Square>
          <Square id={6}></Square>
          <Square id={7}></Square>
        </div>

        <div className="square-row">
          <Square id={8}></Square>
          <Square id={9}></Square>
          <Square id={10}></Square>
          <Square id={11}></Square>
        </div>

        <div className="square-row">
          <Square id={12}></Square>
          <Square id={13}></Square>
          <Square id={14}></Square>
          <Square id={15}></Square>
        </div>
      </div>
    </Layout>
  );
}

export default Product;