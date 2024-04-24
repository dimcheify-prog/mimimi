import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";
import { PageTitle } from "@/shared/ui";
import { useAppSelector } from "@/store/appStore";
import { PageLayout } from "@/shared/ui";

const FavoritesPage = () => {
  const products = useAppSelector(state => state.favorites.products);
  return (
    <PageLayout>
      <PageTitle titleText="Избранные"/>
      {
        products &&
        <ProductsBlock products={products}/>
      }
    </PageLayout>
  );
};

export default FavoritesPage;