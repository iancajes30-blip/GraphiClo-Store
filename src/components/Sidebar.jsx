import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { useState } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [openSection, setOpenSection] = useState(null);
  const [activeTab, setActiveTab] = useState("men");
  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-end items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* CATEGORY LIST */}
        <div className="flex border-b font-raleway text-primary text-mainSize">
          <button
            className={`flex-1 p-3 ${
              activeTab === "men"
                ? "border-b-2 border-black font-bold bg-light transition-all duration-100"
                : ""
            }`}
            onClick={() => setActiveTab("men")}
          >
            Men
          </button>

          <button
            className={`flex-1 p-3 ${
              activeTab === "women"
                ? "border-b-2 border-black font-bold bg-light transition-all duration-100"
                : ""
            }`}
            onClick={() => setActiveTab("women")}
          >
            Women
          </button>
        </div>
        <div
          key={activeTab}
          className="p-4 space-y-3 overflow-y-auto h-full text-left animate-fade "
        >
          {categories[activeTab].map((item, index) => {
            // 🔹 SIMPLE LINK
            if (item.type === "link") {
              return (
                <Link
                  key={index}
                  to={`/shop?gender=${activeTab}&category=${item.category || ""}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-between cursor-pointer py-1 cursor-pointer ${
                    item.highlight ? "text-red-500" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            // 🔹 ACCORDION
            if (item.type === "accordion") {
              return (
                <div key={index}>
                  <div
                    className="flex justify-between cursor-pointer py-1"
                    onClick={() =>
                      setOpenSection(
                        openSection === item.label ? null : item.label,
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <span>{openSection === item.label ? "−" : "+"}</span>
                  </div>

                  {openSection === item.label && (
                    <div className="pl-4 text-mainSize space-y-1 pb-2 animate-fade">
                      {item.items.map((sub, i) => (
                        <Link
                          className="flex text-mainSize justify-between cursor-pointer py-1"
                          key={i}
                          to={`/shop?gender=${activeTab}&category=${sub.category}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
}
