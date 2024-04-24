import ProductItem from "@/components/ProductItem/ProductItem";
import { PageLayout } from "@/shared/ui" 
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "@/store/product/productQuery";

const ProductPage = () => {
  const {productId} = useParams();

  const {data, isLoading, error} = useGetProductQuery(productId);

  return (
    <PageLayout>
      {
        data &&
        <ProductItem product={data}/>
      }
    </PageLayout>
  );
};

export default ProductPage;