import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-64 mb-6" />

      <h1 className="text-primary text-3xl font-bold">{product.name}</h1>

      <p className="text-primary text-gray-600 text-xl mt-2">
        ${product.price}
      </p>

      <button className="bg-primary text-white px-6 py-2 mt-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
