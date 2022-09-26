import React from "react";
import Product from "types/product";
import ProductInfo from "components/product-info";
import { useProduct } from "context/product.context";
import { useCart } from "context/cart.context";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { product: productData, setProduct } = useProduct();
  const { cart, dispatch } = useCart();

  const handleFavorite = (productId: number) => {
    setProduct({ type: "FAVORITES", favorites: productId });
  };

  const addToCart = (item: Product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", payload: { product: item, quantity } });
  };

  const isFavorite = productData.favorites.includes(product.id);

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">{product.emoji}</div>
        <ProductInfo
          title={product.title}
          calories={product.calories}
          price={product.price}
          category={product.category}
          additionalInfo={product.additionalInfo}
        />
      </div>
      <div className="add-to-cart">
        <button
          type="button"
          className="button"
          onClick={() => handleFavorite(product.id)}
        >
          <span>{isFavorite ? "❤️" : "❤︎"}</span>
        </button>
        <button
          type="button"
          className="button"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
