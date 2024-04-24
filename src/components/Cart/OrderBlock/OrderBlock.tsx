import { Button, Modal } from "@/shared/ui";
import css from "./OrderBlock.module.css";
import { useAppSelector } from "@/store/appStore";
import { USDFormat } from "@/shared/utils/currency";
import { useState } from "react";
import { createPortal } from "react-dom";
import OrderModal from "../OrderModal/OrderModal";

const OrderBlock = () => {
  const prodctsInCart = useAppSelector(state => state.cart.cartProducts);
  const cartSum = useAppSelector(state => state.cart.cartSum);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div className={css.root}>
      <Button variant="success" onClick={() => setShowModal(true)}>Make order</Button>
      <hr className={css.divider}/>
      <div className={css.cart_info_wrapper}>
        <h3>Your cart</h3>
        <div className={css.cart_info}>
          <span>Products ({prodctsInCart.length})</span>
          <span>{USDFormat.format(cartSum)}</span>
        </div>
      </div>
      {
        showModal &&

        createPortal(<Modal onClose={handleClose}><OrderModal/></Modal>, document.body)
      }
    </div>
  );
};

export default OrderBlock;