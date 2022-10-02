import type { NextPage } from "next";
import ProductList from "components/product-list";
import Favorites from "components/favorites";
import { ProductProvider } from "context/product.context";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main className="main-content">
        <ProductProvider>
          <Favorites />
          <ProductList />
        </ProductProvider>
      </main>
    </div>
  );
};

export default Home;
