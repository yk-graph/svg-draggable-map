import * as styles from "./styles.css";

import { PageContainer } from "../../components/PageContainer";

export default function TemplatePage() {
  return (
    <PageContainer>
      <div className={styles.root}>
        <div className={styles.inner}>
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>予約見出し</div>
            <div className={styles.mapContainer}>
              <svg
                width={1000}
                height={1000}
                viewBox={`0 0 1000 1000`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgStyle}
              >
                <rect width="1000" height="1000" fill="#5A5E73" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M500 100C334.315 100 200 502.944 200 1000H800C800 502.944 665.685 100 500 100Z"
                  fill="#D9D9D9"
                />
                <rect x="670" y="620" width="40" height="40" transform="rotate(180 670 620)" fill="white" />
                <rect x="610" y="500" width="40" height="40" transform="rotate(180 610 500)" fill="white" />
                <rect x="550" y="440" width="40" height="40" transform="rotate(180 550 440)" fill="white" />
                <rect x="490" y="440" width="40" height="40" transform="rotate(180 490 440)" fill="white" />
                <rect x="430" y="500" width="40" height="40" transform="rotate(180 430 500)" fill="white" />
                <rect x="370" y="620" width="40" height="40" transform="rotate(180 370 620)" fill="white" />
                <rect x="670" y="680" width="40" height="40" transform="rotate(180 670 680)" fill="white" />
                <rect x="610" y="560" width="40" height="40" transform="rotate(180 610 560)" fill="white" />
                <rect x="550" y="500" width="40" height="40" transform="rotate(180 550 500)" fill="white" />
                <rect x="490" y="500" width="40" height="40" transform="rotate(180 490 500)" fill="white" />
                <rect x="430" y="560" width="40" height="40" transform="rotate(180 430 560)" fill="white" />
                <rect x="370" y="680" width="40" height="40" transform="rotate(180 370 680)" fill="white" />
                <rect x="670" y="740" width="40" height="40" transform="rotate(180 670 740)" fill="white" />
                <rect x="610" y="620" width="40" height="40" transform="rotate(180 610 620)" fill="white" />
                <rect x="550" y="560" width="40" height="40" transform="rotate(180 550 560)" fill="white" />
                <rect x="490" y="560" width="40" height="40" transform="rotate(180 490 560)" fill="white" />
                <rect x="430" y="620" width="40" height="40" transform="rotate(180 430 620)" fill="white" />
                <rect x="370" y="740" width="40" height="40" transform="rotate(180 370 740)" fill="white" />
                <rect x="670" y="800" width="40" height="40" transform="rotate(180 670 800)" fill="white" />
                <rect x="610" y="680" width="40" height="40" transform="rotate(180 610 680)" fill="white" />
                <rect x="550" y="620" width="40" height="40" transform="rotate(180 550 620)" fill="white" />
                <rect x="490" y="620" width="40" height="40" transform="rotate(180 490 620)" fill="white" />
                <rect x="430" y="680" width="40" height="40" transform="rotate(180 430 680)" fill="white" />
                <rect x="370" y="800" width="40" height="40" transform="rotate(180 370 800)" fill="white" />
                <rect x="670" y="860" width="40" height="40" transform="rotate(180 670 860)" fill="white" />
                <rect x="610" y="740" width="40" height="40" transform="rotate(180 610 740)" fill="white" />
                <rect x="550" y="680" width="40" height="40" transform="rotate(180 550 680)" fill="white" />
                <rect x="490" y="680" width="40" height="40" transform="rotate(180 490 680)" fill="white" />
                <rect x="430" y="740" width="40" height="40" transform="rotate(180 430 740)" fill="white" />
                <rect x="370" y="860" width="40" height="40" transform="rotate(180 370 860)" fill="white" />
                <rect x="670" y="920" width="40" height="40" transform="rotate(180 670 920)" fill="white" />
                <rect x="610" y="800" width="40" height="40" transform="rotate(180 610 800)" fill="white" />
                <rect x="550" y="740" width="40" height="40" transform="rotate(180 550 740)" fill="white" />
                <rect x="490" y="740" width="40" height="40" transform="rotate(180 490 740)" fill="white" />
                <rect x="430" y="800" width="40" height="40" transform="rotate(180 430 800)" fill="white" />
                <rect x="370" y="920" width="40" height="40" transform="rotate(180 370 920)" fill="white" />
                <rect x="610" y="860" width="40" height="40" transform="rotate(180 610 860)" fill="white" />
                <rect x="550" y="800" width="40" height="40" transform="rotate(180 550 800)" fill="white" />
                <rect x="490" y="800" width="40" height="40" transform="rotate(180 490 800)" fill="white" />
                <rect x="430" y="860" width="40" height="40" transform="rotate(180 430 860)" fill="white" />
                <rect x="610" y="920" width="40" height="40" transform="rotate(180 610 920)" fill="white" />
                <rect x="550" y="860" width="40" height="40" transform="rotate(180 550 860)" fill="white" />
                <rect x="490" y="860" width="40" height="40" transform="rotate(180 490 860)" fill="white" />
                <rect x="430" y="920" width="40" height="40" transform="rotate(180 430 920)" fill="white" />
                <rect x="550" y="920" width="40" height="40" transform="rotate(180 550 920)" fill="white" />
                <rect x="490" y="920" width="40" height="40" transform="rotate(180 490 920)" fill="white" />
              </svg>
            </div>
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
