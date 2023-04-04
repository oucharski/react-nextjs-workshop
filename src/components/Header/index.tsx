import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { HeaderProps } from "./types";
import { styles } from "./styles";

export const Header = (props: HeaderProps) => {
  const router = useRouter();
  const { title } = props;
  const isHome = router.pathname === "/";

  return (
    <Box sx={styles.container}>
      <Typography variant="h1">{title}</Typography>
      {!isHome ? (
        <Link href="/">
          <AiOutlineHome />
        </Link>
      ) : null}
    </Box>
  );
};
