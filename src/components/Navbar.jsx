import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import CartPreview from "./CartPreview";
export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <nav className="bg-white text-primary px-8 flex justify-between items-center text-mainSize font-semibold ">
      <div className="flex items-center gap-4">
        {/* BURGER BUTTON */}
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <a href="/">
        <h1 className="font-raleway text-logo font-bold tracking-widest text-primary">
          GraphiClo
        </h1>
      </a>
      <div className="flex gap-6">
        {/*<a href="/shop" className="hover:text-gray-300">
          SHOP
        </a>
        <a href="/orders" className="hover:text-gray-300">
          ORDERS
        </a>
        */}
        <button onClick={() => setIsOpenSearch(true)}>
          <IoSearch size={21} />
        </button>
        <Searchbar
          isOpenSearch={isOpenSearch}
          setIsOpenSearch={setIsOpenSearch}
        />

        <button onClick={() => setIsOpenCart(true)} className="relative">
          <FiShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
        <CartPreview
          isOpenCart={isOpenCart}
          setIsOpenCart={setIsOpenCart}
          cartItems={cartItems}
        />

        {/*
        <Link to="/cart" className="relative">
          <FiShoppingCart size={20} />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
        */}
        <Link to="#">
          <FaRegUser size={19} />
        </Link>
      </div>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
