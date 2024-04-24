import { ReactElement} from "react";
import css from "./PageLayout.module.css";

// interface ReactNodeArray extends Array<ReactElement> {
//   childrenArray: ReactElement[];
// }

interface PageLayoutProps {
  children: ReactElement[] | ReactElement;
}

export function PageLayout({children}: PageLayoutProps) {
  return (
    <div className={css.root}>
      {
        Array.isArray(children) 
          ? 
        [...children]
          :
        children
      }
    </div>
  )
}