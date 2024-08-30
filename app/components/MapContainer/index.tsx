import * as styles from "./styles.css";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};
