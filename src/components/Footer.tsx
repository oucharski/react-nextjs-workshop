import { CSSProperties } from "react";

type FooterProps = {
  children: any;
};

const style: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  backgroundColor: "#3b3b3b",
  height: "100px",
  padding: "30px",
  color: "white",
};

export const Footer = (props: FooterProps) => {
  return <div style={style}>{props.children}</div>;
};
