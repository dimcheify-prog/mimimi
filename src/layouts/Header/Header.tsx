import css from "./Header.module.css";
import { Logo } from "@/shared/ui/Logo/Logo";
import CartIcon from "@/components/Cart/CartIcon/CartIcon";
import Favorites from "@/components/Favorites/FavoritesIcon/FavoritesIcon";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <header className={css.root}>
      <Link to={'/'} className={css.company_logo_wrapper}>
        <Logo/>
      </Link>
      <div className={css.right_side}>
        <Favorites/>
        <CartIcon/>
      </div>
    </header>
  )
}