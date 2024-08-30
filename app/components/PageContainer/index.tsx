import * as styles from "./styles.css";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>header</div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
