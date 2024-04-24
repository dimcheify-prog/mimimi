import { useAppSelector } from "@/store/appStore";
import css from "./OrderModal.module.css";
import { USDFormat } from "@/shared/utils/currency";

const OrderModal = () => {
  const cartProducts = useAppSelector(state => state.cart.cartProducts);
  const cartSum = useAppSelector(state => state.cart.cartSum);

  return (
    <div className={css.root}>
      <div className={css.title_block}>
        <h2 className={css.title_text}>Success</h2>
      </div>
      <div className={css.items_block}>
        {
          cartProducts.map(product => {
            return (
              <div className={css.item_wrapper}>
                <span className={css.product_title}>{product.title}</span>
                <span>{product.count ? product.count : 1}</span>
              </div>
            )
          })
        }
        <div className={css.total_cost}>
          <span>Total cost</span>
          <span>{USDFormat.format(cartSum)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;