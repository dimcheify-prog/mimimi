import ProductsBlock from "@/components/ProductsBlock/ProductsBlock";
import { useGetAllProductsQuery } from "@/store/products/productsQuery";
import { PageLayout } from "@/shared/ui";

const HomePage = () => {
  const {data} = useGetAllProductsQuery();
  return (
    <PageLayout>
      <ProductsBlock products={data}/>
    </PageLayout>
  );
};

export default HomePage;