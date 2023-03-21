import { CSSProperties } from "react";

const mainStyle = {
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  flexDirection: "column",
} as CSSProperties;

export const Main = (props: { children: any }) => {
  return <div style={mainStyle}>{props.children}</div>;
};
