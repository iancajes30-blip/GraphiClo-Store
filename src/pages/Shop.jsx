import { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const filteredProducts = products
    .filter((product) => {
      let categoryMatch = selectedCategory
        ? product.category === selectedCategory
        : true;

      let priceMatch = true;

      if (priceRange === "0-50") {
        priceMatch = product.price <= 50;
      } else if (priceRange === "50-100") {
        priceMatch = product.price > 50 && product.price <= 100;
      } else if (priceRange === "100+") {
        priceMatch = product.price > 100;
      }

      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sort]);
  return (
    <div className="flex p-8 gap-8">
      {/* SIDEBAR */}
      <div className="w-64 text-left text-primary text-mainSize">
        <h2 className="font-bold mb-4 text-primary text-raleway">Filters</h2>

        {/* CATEGORY */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">Category</h3>

          <button onClick={() => setSelectedCategory("")}>All</button>
          <br />
          <button onClick={() => setSelectedCategory("hoodie")}>Hoodies</button>
          <br />
          <button onClick={() => setSelectedCategory("shirt")}>Shirts</button>
        </div>

        {/* SORT */}
        <div>
          <h3 className="font-bold mb-2 ">Sort</h3>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="bg-white"
          >
            <option value="">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
        <div>
          <h3 className="font-bold mb-2 mt-6">Price</h3>

          <button onClick={() => setPriceRange("0-50")}>$0 - $50</button>
          <br />
          <button onClick={() => setPriceRange("50-100")}>$50 - $100</button>
          <br />
          <button onClick={() => setPriceRange("100+")}>$100+</button>
        </div>
        <button
          onClick={() => {
            setSelectedCategory("");
            setPriceRange("");
            setSort("");
          }}
          className="mt-6 text-red-500"
        >
          Clear Filters
        </button>
      </div>
      <div className="flex flex-col">
        {/* PRODUCTS */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8 text-mainSize ">
          {/* PREVIOUS */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-2 py-2 bg-gray-200 rounded hover:bg-white hover:border hover:shadow-lg transition hover:font-bold disabled:opacity-50 "
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({
            length: Math.ceil(filteredProducts.length / productsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-2 py-1 rounded  hover:bg-white hover:border hover:shadow-lg transition hover:font-bold ${
                currentPage === index + 1 ? "bg-black text-bold" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
            }
            className="px-2 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-white hover:border hover:shadow-lg transition hover:font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
