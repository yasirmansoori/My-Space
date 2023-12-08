import { useState } from "react";
import styles from "./toggle.module.css";
function Toggle_Mode() {
  return (
    <div className={styles.toggle_mode}>
      <label className={styles.bb8_toggle}>
        <input className={styles.bb8_toggle__checkbox} type="checkbox" />
        <div className={styles.bb8_toggle__container}>
          <div className={styles.bb8_toggle__scenery}>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.bb8_toggle__star}></div>
            <div className={styles.tatto_1}></div>
            <div className={styles.tatto_2}></div>
            <div className={styles.gomrassen}></div>
            <div className={styles.hermes}></div>
            <div className={styles.chenini}></div>
            <div className={styles.bb8_toggle__cloud}></div>
            <div className={styles.bb8_toggle__cloud}></div>
            <div className={styles.bb8_toggle__cloud}></div>
          </div>
          <div className={styles.bb8}>
            <div className={styles.bb8__head_container}>
              <div className={styles.bb8__antenna}></div>
              <div className={styles.bb8__antenna}></div>
              <div className={styles.bb8__head}></div>
            </div>
            <div className={styles.bb8__body}></div>
          </div>
          <div className={styles.artificial__hidden}>
            <div className={styles.bb8__shadow}></div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Toggle_Mode;
