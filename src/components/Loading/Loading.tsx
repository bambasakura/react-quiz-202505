import styles from "./Loading.module.css";

interface LoadingProps {
  active: boolean;
}

export default function Loading({ active }: LoadingProps) {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
      <span className={styles.text}>~結果発表~</span>
    </div>
  );
}
