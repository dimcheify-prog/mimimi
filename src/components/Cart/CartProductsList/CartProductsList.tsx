import { IProduct } from "@/models/Product";
import css from "./CartProductsList.module.css";
import CartProductItem from "../CartProductItem/CartProductItem";

interface CartProductListProps {
  products: IProduct[];
}

const CartProductsList = ({products}: CartProductListProps) => {
  return (
    <div className={css.root}>
      {
        products.filter((item, index) => products.indexOf(item) === index).map(product => (
          <CartProductItem key={product.id} product={product}/>
        ))
      }
    </div>
  )
};
export default CartProductsList;