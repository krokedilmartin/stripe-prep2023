import { NODE_SERVER_URL } from "../constants"

export default function StripeSession({ cart }) {

    function startSession () {
        let items = cart.map(item => {
            return {
                id: item.id,
                quantity: 1,
                name: item.name,
                priceInCents: item.price * 100
            }
        })
            
        fetch(`${NODE_SERVER_URL}/create-checkout-session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({items}),
        })
          .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
          })
          .then(({ url }) => {
            window.location = url
          })
          .catch(e => {
            console.error(e.error)
          }) 
      }
  return (
    <div>
        <button onClick={() => startSession()}>starta stripe session</button>
    </div>
  )
}
