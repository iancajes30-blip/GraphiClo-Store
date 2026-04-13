import { Link } from "react-router-dom";
import { useContext } from "react";

export default function ProductFeature({ product }) {
  return (
    <div className=" hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[510px] object-cover mb-3"
        />
      </Link>

      <Link to={`/product/${product.id}`}>
        <h2 className="text-primary text-mainSize font-semibold text-lg">
          {product.name}
        </h2>
      </Link>

      <p className="text-primary text-mainSize"> ${product.price}</p>
    </div>
  );
}
