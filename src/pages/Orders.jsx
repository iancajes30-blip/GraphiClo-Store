import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const updateStatus = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Completed" } : order,
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4">
          <h2 className="font-bold mb-2">Order ID: {order.id}</h2>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity}
            </p>
          ))}
          <p className="mt-2">
            Status: <span className="font-semibold">{order.status}</span>
          </p>

          {order.status === "Pending" && (
            <button
              onClick={() => updateStatus(order.id)}
              className="bg-green-500 text-white px-3 py-1 mt-2"
            >
              Mark as Completed
            </button>
          )}

          <p className="mt-2 font-semibold">Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
}
