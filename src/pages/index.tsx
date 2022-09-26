import type { NextPage } from "next";
import Layout from "components/layouts";
import ProductList from "components/product-list";
import Favorites from "components/favorites";
import { ProductProvider } from "context/product.context";

const Home: NextPage = () => {
  return (
    <Layout title="React Context App">
      <ProductProvider>
        <Favorites />
        <ProductList />
      </ProductProvider>
    </Layout>
  );
};

export default Home;
