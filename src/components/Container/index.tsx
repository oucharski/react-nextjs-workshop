import { Box } from "@mui/material";
import { ContainerProps } from "./types";
import { styles } from "./styles";

export const Container = (props: ContainerProps) => {
  return <Box sx={styles}>{props.children}</Box>;
};
