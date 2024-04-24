import css from "./FavoritesIcon.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store/appStore";
import HeartIcon from "@/assets/HeartIcon";

const FavoritesIcon = () => {
  const likedProducts  = useAppSelector(state => state.favorites.products);

  return (
    <Link to={'/favorites'} className={css.root}>
      {
        likedProducts.length > 0 &&
        <span className={css.favorites_sticker}>
          {likedProducts.length}
        </span>
      }
      <div className={css.icon_wrapper}>
        <HeartIcon/>
      </div>
    </Link>
  );
};

export default FavoritesIcon;