import _ from "lodash";
import { Theme, SxProps } from "@mui/material";

type Overrides = { [key: string]: SxProps };

export const names = ["Felipe", "Brian", "Jorge", "Ricardo"];

export const getStyles = (factor: number, overrides: Overrides = {}) => {
  const defaultsStyles = {
    zebraBox: {
      display: "flex",
      gap: 1,
      flexDirection: "column",
      "& > *:nth-of-type(odd)": {
        backgroundColor: "#ccc",
      },
      "& > *": {
        borderRadius: "4px",
        padding: 1,
        border: "1px solid #ccc",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      },
    },
    container: {
      display: "flex",
      gap: 1,
      flexDirection: "column",
    },
    pureStyleExample: {
      backgroundColor: "#ccc",
      display: "flex",
      padding: factor,
      borderRadius: "4px",
    },
    sxTagExample: {
      padding: factor,
      borderRadius: 2,
      display: "flex",
      backgroundColor: (theme: Theme) => {
        return [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.error.main,
          theme.palette.success.main,
        ];
      },
      color: (theme: Theme) => {
        return [
          theme.palette.primary.contrastText,
          theme.palette.secondary.contrastText,
          theme.palette.error.contrastText,
          theme.palette.success.contrastText,
        ];
      },

      ...overrides,
    },
  };

  return _.merge(defaultsStyles, overrides);
};
