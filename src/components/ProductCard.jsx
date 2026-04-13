import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 hover:shadow-lg transition  min-w-[300px] max-w-[380px]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover mb-3 w-full h-auto"
        />
      </Link>

      <Link to={`/product/${product.id}`}>
        <h2 className="text-primary text-mainSize font-semibold text-lg">
          {product.name}
        </h2>
      </Link>

      <p className="text-primary text-mainSize"> ${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-primary text-white text-mainSize w-full py-2 mt-3 hover:text-primary hover:bg-white hover:border hover:shadow-lg transition hover:font-bold"
      >
        ADD TO CART
      </button>
    </div>
  );
}
