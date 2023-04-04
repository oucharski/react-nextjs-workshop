import _ from "lodash";
import { Box, Typography } from "@mui/material";
import { Button, ButtonProps as MUIButtonProps } from "@mui/material";
import { styles } from "./styles";
import { ButtonsProps } from "./types";

export const Buttons = (props: ButtonsProps) => {
  const { value, name, setter } = props;

  const commonButtonProps = {
    variant: "outlined",
    color: "secondary",
  } as MUIButtonProps;

  return (
    <Box sx={styles.container}>
      <Typography variant="body2" color="secondary.main">
        {_.startCase(name)} {value * 8}px
      </Typography>
      <Box sx={styles.content}>
        <Button {...commonButtonProps} onClick={setter(1)}>
          Increase {name}
        </Button>
        <Button {...commonButtonProps} onClick={setter(-1)}>
          Decrease {name}
        </Button>
      </Box>
    </Box>
  );
};
