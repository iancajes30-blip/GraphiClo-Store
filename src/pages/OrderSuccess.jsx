export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-3xl font-bold mb-4">🎉 Order Placed Successfully!</h1>

      <p className="text-gray-600 mb-6">Thank you for your purchase.</p>

      <a href="/" className="bg-black text-white px-6 py-2 rounded">
        Back to Home
      </a>
    </div>
  );
}
