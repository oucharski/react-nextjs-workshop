type ContainerProps = {
  children: any;
};

const style = {
  backgroundColor: "#e8e8e8",
  flex: 1,
  padding: "30px",
  fontSize: "1.2em",
  color: "black",
};

export const Container = (props: ContainerProps) => {
  return <div style={style}>{props.children}</div>;
};
