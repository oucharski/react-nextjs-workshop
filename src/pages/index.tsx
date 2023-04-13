import Link from "next/link";
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  list: {
    marginLeft: "10px",
    fontSize: "1.2em",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  listTitle: {
    backgroundColor: "",
  },
  listContainer: {
    fontSize: "0.8em",
  },
};

export const Examples = () => {
  return (
    <ol type="1" style={styles.list}>
      <p style={styles.listTitle}>Session 1</p>
      <div style={styles.listContainer}>
        <Link href="/dynamic_routing">
          <li>Dynamic Routing</li>
        </Link>
        <Link href="/state-and-effect">
          <li>State and Effect</li>
        </Link>
      </div>
      <p style={styles.listTitle}>Session 2</p>
      <div style={styles.listContainer}>
        <Link href="/material-ui">
          <li>Material UI</li>
        </Link>
        <Link href="/call-api-base">
          <li>Call an api (Base)</li>
        </Link>
        <Link href="/call-api-swr">
          <li>Call an api (SWR)</li>
        </Link>
      </div>
    </ol>
  );
};

export default Examples;
