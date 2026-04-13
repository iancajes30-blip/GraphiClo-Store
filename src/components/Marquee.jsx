export default function Marquee() {
  return (
    <div className="overflow-hidden bg-black text-white py-1">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* CONTENT (REPEAT MANY TIMES) */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 px-5 text-smSize tracking-wide">
            <span>FREE SHIPPING</span>
            <span>50% OFF SALE</span>
            <span>NEW COLLECTION</span>
            <span>LIMITED TIME OFFER</span>
          </div>
        ))}
      </div>
    </div>
  );
}
