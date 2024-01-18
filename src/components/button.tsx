export type ButtonProps = {} & JSX.HtmlButtonTag;

export const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};
