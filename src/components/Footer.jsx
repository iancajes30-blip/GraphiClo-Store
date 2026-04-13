import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-mainSize font-semibold text-center p-8 border-t items-center">
      <div className="text-center">
        © Copyright,{" "}
        <a href="#" className="text-primary font-bold">
          GraphiClo
        </a>{" "}
        2026
      </div>
      <div>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-gray-300">
            Refund Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/orders" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-primary font-bold text-[14px] tracking-wide p-2">
            NEWSPAPER
          </p>
          <div className="flex flex-row gap-2 justify-center">
            <input
              type="text"
              placeholder="Your Email..."
              className="border p-2  w-full bg-white max-w-80 max-h-24"
            />
            <button className="bg-primary text-white text-mainSize w-full py-2 hover:text-primary hover:bg-white hover:border max-w-32">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 p-4 justify-center ">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
}
