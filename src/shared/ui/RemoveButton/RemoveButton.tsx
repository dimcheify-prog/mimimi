import css from "./RemoveButton.module.css";
import { FaTrash } from "react-icons/fa6";
import { IProduct } from "@/models/Product";
import { useCart } from "@/shared/hooks/useCart";
import classNames from "classnames";

type RemoveButton = 'small' | 'medium';

interface RemoveButtonProps {
  product: IProduct;
  size?: string;
}

export function RemoveButton({product, size}: RemoveButtonProps) {
  const {handleRemoveFromCart} = useCart({product});

  return (
    <div className={classNames(
      css.root,
      css[`root_size_${size}`]
    )} 
    onClick={handleRemoveFromCart}>
      <FaTrash size={
        (size === 'small' && 15) || 25
      }/>
    </div>
  );
};
