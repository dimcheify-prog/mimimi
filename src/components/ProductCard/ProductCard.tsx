import { IProduct } from "@/models/Product";
import css from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { useCart } from "@/shared/hooks/useCart";
import { LikeButton } from "@/shared/ui";

interface ProductCardProps {
  product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {

  const {isInCart, handleAddToCart} = useCart({product});

  return (
    <Link to={`/products/${product.id}`} className={css.root}>
      <div className={css.heart_icon_wrapper}>
        <LikeButton product={product}/>
      </div>
      <div className={css.image_wrapper}>
        <img className={css.image} src={product.image} alt="product image" />
      </div>
      <p className={css.cost}>
        {product.price}&#36;
      </p>
      <p className={css.title}>
        {product.title}
      </p>
      <Button variant="primary" size="medium" active={isInCart} onClick={handleAddToCart}>
        {
          isInCart 
            ?
          'Remove from cart'
            :
          'Add to cart'
        }
      </Button>
    </Link>
  );
};

export default ProductCard;