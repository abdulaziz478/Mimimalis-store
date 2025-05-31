import React, { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt Hitam", price: 120000, image: "/products/shirt-black.jpg" },
  { id: 2, name: "Hoodie Abu", price: 250000, image: "/products/hoodie-grey.jpg" },
  { id: 3, name: "Topi Minimalis", price: 85000, image: "/products/hat-minimal.jpg" },
];

export default function MinimalistStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const productList = cart.map((item) => `• ${item.name} - Rp${item.price.toLocaleString()}`).join("%0A");
    const message = `Halo, saya ingin memesan:%0A${productList}%0A%0ATotal: Rp${totalPrice.toLocaleString()}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Minimalist Store</h1>
        <p className="text-sm text-gray-500">Fashion simpel, gaya maksimal.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-lg bg-white overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Rp{product.price.toLocaleString()}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
              >
                Tambahkan ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </main>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Keranjang Belanja</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Keranjang kosong.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b pb-2">
                  <span>{item.name}</span>
                  <span>Rp{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-bold">
              Total: Rp{totalPrice.toLocaleString()}
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Checkout via WhatsApp
            </button>
          </>
        )}
      </section>

      <footer className="text-center border-t pt-6">
        <p>Hubungi kami via <a href="https://wa.me/6281234567890" className="text-green-600 font-medium" target="_blank">WhatsApp</a></p>
        <p className="text-xs text-gray-400 mt-2">© 2025 Minimalist Store</p>
      </footer>
    </div>
  );
}
