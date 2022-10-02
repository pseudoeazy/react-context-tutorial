import React from "react";
import Product from "types/product";
import { useProduct } from "context/product.context";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { product: productData, setProduct } = useProduct();

  const handleFavorite = (productId: number) => {
    setProduct({ type: "FAVORITES", favorites: productId });
  };

  const isFavorite = productData.favorites.includes(product.id);

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">{product.title}</div>
      </div>
      <div className="add-to-cart">
        <button
          type="button"
          className="button"
          onClick={() => handleFavorite(product.id)}
        >
          <span>{isFavorite ? "❤️" : "❤︎"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
