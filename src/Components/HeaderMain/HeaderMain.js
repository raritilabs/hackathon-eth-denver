import React from "react";
import styles from "./index.module.scss";
import { APP_ENUM } from "../../enums/appEnum";
const HeaderMain = () => {
  const handleOnClickConnectWallet = () => {
    //TODO
  };
  return (
    <div className={styles.headerMainContainer}>
      <div className={styles.logoContainer}>LOGO</div>
      <div className={styles.walletConnectContainer}>
        <button
          className={styles.walletConnectButton}
          onClick={handleOnClickConnectWallet}
        >
          {APP_ENUM.connectWallet}
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
