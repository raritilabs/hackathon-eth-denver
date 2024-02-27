import React, { useState } from "react";
import HeaderMain from "./Components/HeaderMain/HeaderMain";
import { APP_ENUM } from "./enums/appEnum";
import styles from "./styles/app.module.scss";
import arrowIcon from "./assets/arrowIcon.svg";
import MintNFT from "./Components/MintNft/MintNFT";

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const handleOnClickDrip = () => {
    //TODO
  };
  const handleOnChangeWalletAddress = (e) => {
    setWalletAddress(e.target.value);
  };
  return (
    <div>
      <HeaderMain />
      <div className={styles.getTokenContainer}>
        <div className={styles.getTokenContent}>{APP_ENUM.getTokenContent}</div>
        <div className={styles.walletAddressDetails}>
          <div className={styles.walletAddressKeyAndValue}>
            <div className={styles.ethAddress}>{APP_ENUM.ethAddress}</div>
            <div className={styles.walletAddressContainer}>
              <input
                type="text"
                value={walletAddress}
                autoFocus
                onChange={handleOnChangeWalletAddress}
                placeholder={APP_ENUM.getStartByWalletConnect}
                className={styles.walletAddressInput}
              />
            </div>
          </div>
          <div className={styles.dripButton} onClick={handleOnClickDrip}>
            <button className={styles.dripButtonContent}>
              {APP_ENUM.dripButton}
              <img src={arrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
      <MintNFT />
    </div>
  );
};

export default App;
