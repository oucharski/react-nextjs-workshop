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
    </ol>
  );
};

export default Examples;
