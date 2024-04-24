import { ReactNode, SyntheticEvent } from "react";
import classNames from "classnames";
import css from "./Button.module.css";

type ButtonTypeTypes = 'submit' | 'reset' | 'button';

type ButtonVariantTypes = 'primary' | 'secondary' | 'success';

type ButtonSizeTypes =  'small' | 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean,
  variant: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  type?: ButtonTypeTypes;
  active?: boolean;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export function Button({
  children,
  disabled,
  onClick,
  active,
  variant='primary',
  size='large',
  type='button'
}: ButtonProps) {
  
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames(
        css.root,
        css[`root_size_${size}`],
        css[`root_variant_${variant}`],
        active && css.root_active
      )}
    >
     {children}
    </button>
  )
}