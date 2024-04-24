import { IProduct } from "@/models/Product";
import css from "./ProductItem.module.css";
import StarsLIst from "../StarsLIst/StarsLIst";
import { Button } from "@/shared/ui";
import { useCart } from "@/shared/hooks/useCart";
import { LikeButton } from "@/shared/ui";

interface ProductItemProps {
  product: IProduct
}

const ProductItem = ({
  product
}: ProductItemProps) => {
  const {isInCart, handleAddToCart} = useCart({product});

  return (
    <div className={css.root}>
      <div className={css.name_ration_wrapper}>
        <h3 className={css.product_name}>{product.title}</h3>
        <div className={css.rating_block}>
          <StarsLIst rating={product.rating.rate}/>
          <span>{product.rating.count}</span>
        </div>
      </div>
      <div className={css.categories_block}>
        <div className={css.categry_wrapper}>
          <span className={css.category_name}>{product.category}</span>
        </div>
      </div>
      <div className={css.row_block}>
        <div className={css.left_side_wrapper}>
          <div className={css.main_image_wrapper}>
            <img className={css.main_image} src={product.image} alt="product image" />
          </div>
        </div> 
        <div className={css.price_block}>
          <div>
            <div className={css.price_text_wrapper}>
              <span className={css.price_text}>{product.price}&#36;</span>
            </div>
            <span className={css.product_text_for_item}>For one item {product.price}&#36;</span>
          </div>
          <div className={css.price_buttons_block}>
            <Button variant="primary" active={isInCart} onClick={handleAddToCart}>
              {
                isInCart
                  ?
                'Remove from cart'
                  :
                'Add to cart'
              }
            </Button>
            <LikeButton product={product}/>
          </div>
        </div>
      </div>
      <div className={css.product_description_block}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;