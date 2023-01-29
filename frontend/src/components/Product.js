export default function Product({ data, cart, setCart }) {
    const {name, price, id} = data

    const addToCart = () => {
        setCart([...cart, {
            id: id,
            name: name,
            priceInCents: price * 100
        }])
    }
  return (
    <div>
        <h4>{name} : {price}</h4>
        <button onClick={addToCart}>Lägg {name} i varukorgen</button>
    </div>
  )
}
