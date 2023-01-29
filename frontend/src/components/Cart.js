export default function Cart({ cart }) {

    let totalPrice = 0

    for (let index = 0; index < cart.length; index++) {
        totalPrice += cart[index].priceInCents
    }

  return (
    <div>Varukorg: {totalPrice / 100}</div>
  )
}
