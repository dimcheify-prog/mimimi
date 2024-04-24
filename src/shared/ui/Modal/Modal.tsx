import { ReactElement, SyntheticEvent } from "react"
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactElement;
  onClose: () => void;
}

export function Modal({children, onClose}: ModalProps) {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}