import React from "react";
import Product from "types/product";
import ExtraInfo from "components/extra-info";

const ProductInfo: React.FC<
  Partial<Product> & Pick<Product, "additionalInfo">
> = ({ title, price, category, additionalInfo }) => {
  return (
    <table className="product-info">
      <tbody>
        <tr>
          <td className="title">Name</td>
          <td className="info">{title}</td>
        </tr>
        <tr>
          <td className="title">Price</td>
          <td className="info">${price?.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="title">Category</td>
          <td className="info">{category}</td>
        </tr>
        <tr>
          <td className="title">Description</td>
          <td className="info">
            <ExtraInfo additionalInfo={additionalInfo} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProductInfo;
