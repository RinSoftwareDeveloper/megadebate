import { FunctionComponent } from "react";
import styles from "./A42.module.css";
const A42: FunctionComponent = () => {
  return (
    <div className={styles.a42}>
      <img className={styles.mega1Icon} alt="" src="/mega-1@2x.png" />
      <div className={styles.a42Child} />
      <div className={styles.x}>x</div>
      <div className={styles.debateTournament}>
        <span>Debate</span>
        <span className={styles.tournament}> Tournament</span>
      </div>
      <div className={styles.prizes}>
        <p className={styles.freeEntry}>PRIZES</p>
      </div>
      <div className={styles.schedule}>SCHEDULE</div>
      <div className={styles.freeEntryWeekendContainer}>
        <p className={styles.freeEntry}>Free Entry</p>
        <p className={styles.freeEntry}>&nbsp;</p>
        <p className={styles.freeEntry}>Weekend of Competitive Debate Fun!</p>
      </div>
      <button className={styles.a42Item} />
      <div className={styles.signUp}>SIGN UP</div>
      <div className={styles.stTeam50Container}>
        <p
          className={styles.freeEntry}
        >{`1st Team                                 $50 per member    `}</p>
        <p
          className={styles.freeEntry}
        >{`2nd Team                               $40 per member `}</p>
        <p className={styles.freeEntry}>3rd Team $30 per member</p>
        <p className={styles.freeEntry}>4th Team $20 per member</p>
        <p className={styles.freeEntry}>&nbsp;</p>
      </div>
      <div className={styles.saturday100PmContainer}>
        <p className={styles.freeEntry}>Saturday</p>
        <p className={styles.freeEntry}>1:00 PM - 1:15 PM Opening Ceremony</p>
        <p className={styles.freeEntry}>1:30-2:30 Round 1</p>
        <p className={styles.freeEntry}>3:00-4:00 Round 2</p>
        <p className={styles.freeEntry}>4:30-5:30 Round 3</p>
        <p className={styles.freeEntry}>&nbsp;</p>
        <p className={styles.freeEntry}>Sunday</p>
        <p className={styles.freeEntry}>Round 4: 1:30-2:30</p>
        <p className={styles.freeEntry}>Semifinals: 3:00-4:00</p>
        <p className={styles.freeEntry}>Finals: 4:30-5:30</p>
        <p className={styles.freeEntry}>&nbsp;</p>
        <p className={styles.freeEntry}>
          6:00-6:30 PM: Closing Ceremony and Awards
        </p>
      </div>
      <div className={styles.a42Inner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.resolvedOnBalanceContainer}>
        <span>Resolved:</span>
        <span className={styles.tournament}>{` `}</span>
        <span className={styles.onBalanceThe}>
          on balance, the benefits of the Internet of Things outweigh the harms
          of decreased personal privacy.
        </span>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
    </div>
  );
};

export default A42;
