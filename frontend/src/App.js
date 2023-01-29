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

  // function createWooOrder() {
  //   fetch("http://localhost:5000/create-woo-order", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       sessionId: 'cs_test_b15OIgKzQkT1998u2SommxP2No5xmFJZntFJkCDcKcKgk2yfywL5TTg8vz' 
  //     }),
  //   })
  // }

  return (
    
    <div className="App">
      <Cart cart={cart} />
      {products ? products.map(p => <Product data={p} key={p.id} cart={cart} setCart={setCart} />) : 'laddar produktdata' }
      <div></div>
      {/* <button onClick={() => createWooOrder()}>createWooOrder</button> */}
      <StripeSession cart={cart} />
    </div>
  );
}

export default App;