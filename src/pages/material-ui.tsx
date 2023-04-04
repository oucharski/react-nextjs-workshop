import _ from "lodash";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Buttons } from "@/components";
import { getStyles, names } from "@/pagesData/material-ui";

type SetStateFn = (val: any) => void;

export const Page = () => {
  const [margin, setMargin] = useState<number>(1);
  const [factor, setFactor] = useState<number>(1);
  const theme = useTheme();

  const handleChangeValue = (setter: SetStateFn) => (value: number) => () => {
    // @ts-ignore
    setter((prevVal) => prevVal + value);
  };

  const overrides = { sxTagExample: {} };

  const styles = getStyles(factor, overrides);

  return (
    <Box sx={styles.container}>
      {/* Header */}
      <Typography variant="h1" sx={{ ml: margin }}>
        Material UI [{theme.palette.primary.main}] ({margin * 8}px)
      </Typography>

      {/* Buttons */}
      <Buttons
        value={margin}
        name="margin"
        setter={handleChangeValue(setMargin)}
      />
      <Buttons
        value={factor}
        name="factor"
        setter={handleChangeValue(setFactor)}
      />

      {/* Examples */}
      <Box style={styles.pureStyleExample}>Pure style tag example</Box>
      <Box sx={styles.sxTagExample}>Sx tag example</Box>

      <Box sx={styles.zebraBox}>
        {names.map((name) => (
          <Box onClick={() => alert(name)} key={name}>
            {name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page;
