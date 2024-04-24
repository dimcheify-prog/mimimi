import { IProduct } from "@/models/Product";
import css from "./ProductsBlock.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface ProductsBlockProps {
  products: IProduct[]
}

const ProductsBlock = ({products}: ProductsBlockProps) => {

  return (
    <div className={css.root}>
      {
        products &&
        products.map((product) => <ProductCard key={product.id} product={product}/>)
      }
    </div>
  );
};

export default ProductsBlock;