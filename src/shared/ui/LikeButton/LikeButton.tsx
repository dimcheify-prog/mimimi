import { IProduct } from "@/models/Product";
import css from "./LikeButton.module.css";
import { FaHeart } from "react-icons/fa";
import { useLike } from "@/shared/hooks/useLike";
import classNames from "classnames";

type LikeButtonSizeTypes = 'small' | 'medium';

interface LikeButtonProps {
  product: IProduct;
  size?: LikeButtonSizeTypes;
}

export function LikeButton ({product, size}: LikeButtonProps) {
  const {isLiked, handleToggleLike} = useLike({product});

  return (
    <div className={classNames(css.root, css[`root_size_${size}`])}
     onClick={handleToggleLike}>
      <FaHeart
        size={
          (size === 'small' && 15) || 25
        }
        color={isLiked ? "#FF0000" : "#000000"}
      />
    </div>
  );
};
