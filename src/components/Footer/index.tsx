import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
import { FooterProps } from "./types";

export const Footer = (props: FooterProps) => {
  return (
    <Box sx={styles}>
      <Typography color="primary.main">{props.children}</Typography>
    </Box>
  );
};
