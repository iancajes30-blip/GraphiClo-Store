import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { products } from "../data/products";

export default function Searchbar({ isOpenSearch, setIsOpenSearch }) {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      {/* OVERLAY */}
      {isOpenSearch && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpenSearch(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-24 w-full bg-white z-50 transform transition-transform duration-500 ${
          isOpenSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-center p-4 gap-5">
          <div className="w-3/4 relative">
            <input
              type="text"
              className="border p-2 w-full bg-white font-raleway"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
            {/* SEARCH RESULTS */}
            {isSearchOpen && search && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 max-h-80 overflow-y-auto z-50">
                {filteredProducts.length === 0 ? (
                  <p className="p-4 text-sm text-gray-500">No results found</p>
                ) : (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="p-3 hover:bg-gray-100 cursor-pointer flex gap-3"
                    >
                      <img
                        src={product.image}
                        className="w-12 h-12 object-cover"
                      />
                      <div>
                        <p className="text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {/* BUTTON INSIDE */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <IoSearchOutline size={24} />
            </button>
          </div>
          <button onClick={() => setIsOpenSearch(false)}>
            <FiX size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
