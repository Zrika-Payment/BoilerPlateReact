import { useState } from 'react';
import { products } from '../../constants/Products';

function ProductCards() {
console.log(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-sm text-gray-900 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-900">Discover our latest collection of tech products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-900 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-3">
                  <ul className="space-y-1">
                    {product.features?.slice(0, 3)?.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-900 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-900">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-900 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple notification when product is added */}
      {selectedProduct && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {selectedProduct.name} added to cart!
        </div>
      )}
    </div>
  );
}

export default ProductCards;