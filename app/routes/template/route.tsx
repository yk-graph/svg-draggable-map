import * as styles from "./styles.css";

import { PageContainer } from "../../components/PageContainer";

export default function TemplatePage() {
  return (
    <PageContainer>
      <div className={styles.root}>
        <div className={styles.inner}>
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>予約見出し</div>
            <div className={styles.mapContainer}>MAP</div>
            <div className={styles.mapSeatStatus}>座席選択可能状況</div>
            <div className={styles.mapInfomation}>MAPガイド</div>
          </div>

          <div className={styles.reservationSection}>
            <div className={styles.reservationHeader}>予約見出し</div>
            <div className={styles.reservationBody}>予約一覧</div>
            <div className={styles.reservationAction}>アクションボタン</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
