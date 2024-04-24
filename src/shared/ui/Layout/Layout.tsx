import {Outlet} from "react-router-dom";
import css from "./Layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  headerSlot: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div className={css.root}>
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}