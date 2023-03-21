import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { CSSProperties } from "react";

type HeaderProps = {
  title: string;
  color?: CSSProperties["color"];
};

export const Header = (props: HeaderProps) => {
  const router = useRouter();
  const { title, color = "#b0b0b0" } = props;
  const isHome = router.pathname === "/";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: color,
        height: "100px",
        padding: "30px",
        fontSize: "2.25em",
        justifyContent: "space-between",
        color: "#3d3d3d",
      }}
    >
      {title}
      {!isHome ? (
        <Link href="/">
          <AiOutlineHome />
        </Link>
      ) : null}
    </div>
  );
};
