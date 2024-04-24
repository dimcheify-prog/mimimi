import OzonLogo from "@/assets/ozon-logo.png";
import css from "./Logo.module.css";

export function Logo() {
  return (
    <div className={css.root}>
      <img className={css.image} src={OzonLogo} alt="logo" />
    </div>
  )
}