import css from "./CartPage.module.css";
import CartProductsBlock from "@/components/Cart/CartProductsBlock/CartProductsBlock";
import OrderBlock from "@/components/Cart/OrderBlock/OrderBlock";
import { PageLayout, PageTitle } from "@/shared/ui";

const CartPage = () => {
  return (
    <PageLayout>
      <PageTitle titleText="Your Cart"/>
      <div className={css.row}>
        <CartProductsBlock/>
        <OrderBlock/>
      </div>
    </PageLayout>
  )
}

export default CartPage;