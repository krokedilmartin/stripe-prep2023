import {useState, useEffect} from 'react'
import Cart from './components/Cart'
import Product from './components/Product'
import StripeSession from './components/StripeSession'
import { NODE_SERVER_URL } from './constants'

function App() {

  useEffect(() => {
    fetch(`${NODE_SERVER_URL}/get-all-products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

const [products, setProducts] = useState()
const [cart, setCart] = useState([])

  return (
    
    <div className="App">
      <Cart cart={cart} />
      {products ? products.map(p => <Product data={p} key={p.id} cart={cart} setCart={setCart} />) : 'laddar produktdata' }
      <StripeSession cart={cart} />
    </div>
  );
}

export default App;