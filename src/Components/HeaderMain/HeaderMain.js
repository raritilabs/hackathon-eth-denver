import React, { useContext } from "react";
import styles from "./index.module.scss";
import { APP_ENUM } from "../../enums/appEnum";
import { AppContext } from "../../context";
import cx from "classnames";

const HeaderMain = ({ setWalletAddress }) => {
  const { isMobile } = useContext(AppContext);
  const handleOnClickConnectWallet = () => {
    //TODO
    // implement the wallet connect process using wagmi
    // once connection is successful, store the wallet address in state setWalletAddress
  };
  return (
    <div
      className={cx(styles.headerMainContainer, {
        [styles.headerMainContainerMob]: isMobile,
      })}
    >
      <div
        className={cx(styles.logoContainer, {
          [styles.logoContainerMob]: isMobile,
        })}
      >
        LOGO
      </div>
      <div className={styles.walletConnectContainer}>
        <button
          className={cx(styles.walletConnectButton, {
            [styles.walletConnectButtonMob]: isMobile,
          })}
          onClick={handleOnClickConnectWallet}
        >
          {APP_ENUM.connectWallet}
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
