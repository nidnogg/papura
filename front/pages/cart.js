import Layout from './components/layout';

const Item = (props) => {
  const {model, price} = props;

  return (
    <div className="item">
      <h1>Mini</h1>
      <img className="item-image" src="" alt="missing image!"/>
      <h1 className="price">R$<span className="actual-price">18</span></h1>
    </div>

  )
}

const Cart = () => {

  const handleBuy = () => {
    alert('buy!');
  }

  return (
    <Layout>
      <section className="cart-row">
        <header className="page-header">
          <h1>Meus itens:</h1>
        </header>
        <div>
          <br />
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
          <Item model="mini" price="18"/>
        </div>       
        <div className="cart-total"> 
          <p>Total: </p>
          <h1 className="total-price">R$<span className="actual-price">18</span></h1>

        </div>
        <button className="cart-button" onClick={handleBuy}>Comprar</button>
      </section>
    </Layout>
  )
}

export default Cart;