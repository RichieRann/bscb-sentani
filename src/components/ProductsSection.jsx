import React from "react"

const PRODUCTS = [
  { id: 1, name: "Espresso", img: "img/product_dummy.jpg" },
  { id: 2, name: "Cappuccino", img: "img/product_dummy.jpg" },
  { id: 3, name: "Latte", img: "img/product_dummy.jpg" },
  { id: 4, name: "Americano", img: "img/product_dummy.jpg" },
  { id: 5, name: "Mocha", img: "img/product_dummy.jpg" },
  { id: 6, name: "Affogato", img: "img/product_dummy.jpg" },
]

export default function ProductsSection({ preview, setPreview }) {
  return (
    <section
      id="products"
      className="relative z-10 bg-amber-900 pt-40 pb-20 min-h-[60vh] flex flex-col items-center">
      <h2 className="text-4xl font-bold text-amber-100 mb-12 tracking-wider animate-slide-in">
        Our Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full px-4">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-amber-100 rounded-xl shadow-lg overflow-hidden flex flex-col items-center cursor-pointer transition-transform hover:scale-105 group w-full max-w-xs mx-auto"
            style={{ minHeight: 260 }}
            onClick={() => setPreview(prod)}>
            <img
              src={`/${prod.img}`}
              alt={prod.name}
              className="object-cover w-full h-52 sm:h-60 group-hover:opacity-80 transition"
            />
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="text-lg font-semibold text-amber-800">
                {prod.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[999] animate-fade-in"
          onClick={() => setPreview(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-sm"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={`/${preview.img}`}
              alt={preview.name}
              className="object-cover w-64 h-64 rounded-xl mb-4"
            />
            <div className="text-2xl font-bold text-amber-800 mb-2">
              {preview.name}
            </div>
            <button
              className="mt-4 px-6 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition"
              onClick={() => setPreview(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
