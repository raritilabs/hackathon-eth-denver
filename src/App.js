import React, { useState } from "react";
import HeaderMain from "./Components/HeaderMain/HeaderMain";
import { APP_ENUM } from "./enums/appEnum";
import styles from "./styles/app.module.scss";
import arrowIcon from "./assets/arrowIcon.svg";
import MintNFT from "./Components/MintNft/MintNFT";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "./context";
import cx from "classnames";
// import { WagmiProvider } from "wagmi";
// import { config } from "./config";

const App = () => {
  // mobile view resolution setting
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  // state to store wallet address once connected
  const [walletAddress, setWalletAddress] = useState("");
  const handleOnClickDrip = async () => {
    //TODO
    try {
      const walletDetails = {
        wallet_address: walletAddress,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(walletDetails),
      };
      const response = await fetch(
        process.env.REACT_APP_SERVER_URI + "/get-drip-response",
        requestOptions
      );
      if (response.ok) {
        //TODO: continue the process
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    // <WagmiProvider>
    <AppContext.Provider value={{ isMobile }}>
      <div>
        <HeaderMain setWalletAddress={setWalletAddress} />

        <div
          className={cx(styles.getTokenContainer, {
            [styles.getTokenContainerMob]: isMobile,
          })}
        >
          <div
            className={cx(styles.getTokenContent, {
              [styles.getTokenContentMob]: isMobile,
            })}
          >
            {APP_ENUM.getTokenContent}
          </div>
          <div
            className={cx(styles.walletAddressDetails, {
              [styles.walletAddressDetailsMob]: isMobile,
            })}
          >
            <div className={styles.walletAddressKeyAndValue}>
              <div className={styles.ethAddress}>{APP_ENUM.ethAddress}</div>
              <div
                className={cx(styles.walletAddressContainer, {
                  [styles.walletAddressContainerMob]: isMobile,
                })}
              >
                {walletAddress
                  ? walletAddress
                  : APP_ENUM.getStartByWalletConnect}
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
    </AppContext.Provider>
    // </WagmiProvider>
  );
};

export default App;
