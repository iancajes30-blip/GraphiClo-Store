import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPreview({ isOpenCart, setIsOpenCart }) {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } =
    useContext(CartContext);
  return (
    <>
      {/* OVERLAY */}
      {isOpenCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpenCart(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 transform transition-transform duration-500 ${
          isOpenCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpenCart(false)}>
            <FiX size={24} />
          </button>
        </div>

        <div className="p-4 flex flex-col h-full">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

          {/* CART ITEMS */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-3 border-b pb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold">${item.price}</p>
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
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* FOOTER */}
        <div className="pt-4 border-t fixed w-full bottom-0">
          <Link
            to="/cart"
            onClick={() => setIsOpenCart(false)}
            className="block text-center bg-black text-white py-2 rounded"
          >
            View Cart
          </Link>
        </div>
      </div>
    </>
  );
}
