import styles from "./Display.module.css";

import { ReactNode } from "react";

export default function Display({ children }: { children: ReactNode }) {
  return <div className={styles.display}>{children}</div>;
}
