import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } =
    useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-6 border-b py-4">
          <img src={item.image} alt={item.name} className="w-20" />

          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p>${item.price}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-2 bg-gray-300"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-2 bg-gray-300"
            >
              +
            </button>
          </div>

          <p className="w-20">${item.price * item.quantity}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      {/* Total */}
      {cart.length > 0 && (
        <h2 className="text-2xl font-bold mt-6">Total: ${total}</h2>
      )}
      <Link to="/checkout">
        <button className="bg-green-500 text-white px-6 py-2 mt-4">
          Proceed to Checkout
        </button>
      </Link>
      ;
    </div>
  );
}
