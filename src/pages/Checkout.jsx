import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useContext(CartContext);
  const [payment, setPayment] = useState("cod");
  const [shipping, setShipping] = useState("standard");
  const shippingFee = shipping === "express" ? 15 : 5;
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}

        <h3 className="font-bold mt-4">Subtotal: ${total}</h3>

        <p>Shipping: ${shippingFee}</p>

        <h2 className="text-xl font-bold mt-2">
          Total: ${total + shippingFee}
        </h2>
      </div>

      {/* User Form */}
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          className="border p-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border p-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Shipping Method</h3>

          <label className="block">
            <input
              type="radio"
              value="standard"
              checked={shipping === "standard"}
              onChange={(e) => setShipping(e.target.value)}
            />
            Standard Delivery ($5)
          </label>

          <label className="block">
            <input
              type="radio"
              value="express"
              checked={shipping === "express"}
              onChange={(e) => setShipping(e.target.value)}
            />
            Express Delivery ($15)
          </label>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={() => {
            if (!name || !address || !phone) {
              setError("Please fill in all fields");
              return;
            }

            const newOrder = {
              id: Date.now(),
              items: cart,
              total: total + shippingFee,
              shipping,
              shippingFee,
              status: "Pending",
              name,
              address,
              phone,
              payment,
            };

            const existingOrders =
              JSON.parse(localStorage.getItem("orders")) || [];

            localStorage.setItem(
              "orders",
              JSON.stringify([...existingOrders, newOrder]),
            );

            clearCart();
            navigate("/success");
          }}
          className="bg-black text-white py-2"
        >
          Place Order
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label>
          <input
            type="radio"
            value="cod"
            checked={payment === "cod"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            value="gcash"
            checked={payment === "gcash"}
            onChange={(e) => setPayment(e.target.value)}
          />
          GCash
        </label>
      </div>
    </div>
  );
}
