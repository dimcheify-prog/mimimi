import css from "./PageTitle.module.css";

interface PageTitleProps {
  titleText: string;
}

export function PageTitle(props: PageTitleProps) {
  return (
    <div className={css.root}>
      <h2>{props.titleText}</h2>
    </div>
  )
}