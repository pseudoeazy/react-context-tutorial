import Product from "types/product";
import { useProduct } from "context/product.context";

const Favorites: React.FC = () => {
  const { product } = useProduct();
  const myFavorites: Product[] = [];

  product.favorites.forEach((fav) => {
    const favorite = product.products.find((product) => product.id === fav);
    if (favorite) {
      myFavorites.push(favorite);
    }
  });
 
  return (
    <section className="favorites">
      <h2>My Favorite products</h2>
      {myFavorites.length ? (
        <ul>
          {myFavorites.map((favorite) => (
            <li key={favorite.id}>{favorite.title}</li>
          ))}
        </ul>
      ) : (
        <div>😂No favorite product!</div>
      )}
    </section>
  );
};

export default Favorites;
