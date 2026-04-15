import BannerHomePage from "../assets/Banner1.png";

export default function Banner() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* BACKGROUND IMAGE */}
      <img
        src={BannerHomePage}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-10 md:px-20 text-white max-w-xl">
          <p className="text-sm mb-2 uppercase tracking-wide">New Collection</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Wear The After
          </h1>

          <p className="text-gray-200 mb-6 tracking-wide">
            Soft. Breathable. Lightweight. Built for comfort after your workout.
          </p>

          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition tracking-wide">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
}
