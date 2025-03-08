import React from "react";
import Marquee from "react-fast-marquee";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Market from "./Market";
import TopList from "./TopList";
import BalanceHistory from "./BalanceHistory";

const Analyzer = ({handleToggle, open}) => {
  const coins = [
    {
      name: "PONKEI",
      value: "$349",
      icon: "/images/coin.png",
      status: "success",
    },
    {
      name: "CATS",
      value: "$379",
      icon: "/images/coin.png",
      status: "success",
    },
    {
      name: "CVERSE",
      value: "$649",
      icon: "/images/coin.png",
      status: "success",
    },
    { name: "CATS", value: "$449", icon: "/images/coin.png", status: "fail" },
    { name: "PSDUI", value: "$549", icon: "/images/coin.png", status: "fail" },
    { name: "POSDH", value: "$249", icon: "/images/coin.png", status: "fail" },
    {
      name: "CATS",
      value: "$449",
      icon: "/images/coin.png",
      status: "success",
    },
  ];
  return (
    <div className={`${styles.content} ${open ? styles.hidden : ""}`}>
      {/* header */}
      <div className={styles.head}>
        <div className={`${styles.flex} ${styles.gap18}`}>
                  <Image onClick={handleToggle} src="/images/menu.svg" alt="logo" className={styles.menu__responsive} width={18} height={18} />
        
        <Image src="/images/breadcrub.png" alt="logo" width={91} height={24} />
        </div>
        <div className={`${styles.flex} ${styles.gap10}`}>
          <button
            className={`${styles.connectBtn} ${styles.btn} ${styles.semiboldTypo}`}
          >
            <Image
              src="/images/wallet-2.png"
              alt="wallet"
              width={16}
              height={16}
            />
            Connect Wallet
          </button>
          <div className={`${styles.wallet} ${styles.hide}`}>
            <Image
              src="/images/notification.png"
              alt="wallet"
              width={16}
              height={16}
            />
          </div>
          <div className={`${styles.wallet} ${styles.hide}`}>
            <Image
              src="/images/user-square.png"
              alt="wallet"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      {/* crypto coins */}
      <Marquee>
      <div className={styles.crypto}>
        {coins.map((item) => (
          <div className={styles.coin}>
            <div className={styles.coinType}>
              <Image src={item.icon} alt="coin" width={26} height={26} />
              <span
                className={`${styles.semiboldTypo} ${
                  item.status === "success" ? styles.success : styles.fail
                }`}
              >
                {item.value}
              </span>
            </div>
            <span className={styles.mediumTypo}>{item.name}</span>
          </div>
        ))}
      </div>
      </Marquee>
      {/* data */}

      <div className={styles.data}>
        {/* search */}
        <div className={styles.searchbar}>
          <input
            type="text"
            className={styles.bar}
            placeholder="Enter Solana Wallet Address"
          />
          <button className={`${styles.searchBtn} ${styles.btn} ${styles.semiboldTypo}`}>
            Analyze
          </button>
        </div>

        {/* balance */}
        <div className={styles.balance}>
          {/* balance card */}
          <div className={styles.balanceCard}>
            <div className={`${styles.cardLeft}`}>
              <div className={`${styles.flex} ${styles.gap10}`}>
                <Image
                  src="/images/union.png"
                  alt="coin"
                  width={18}
                  height={14}
                />
                <span className={`${styles.secondary} ${styles.small400}`}>
                  SOL Balance
                </span>
              </div>
              <div>
                <h2 className={`${styles.largeTypo} ${styles.primary}`}>
                  12.45 SOL
                </h2>
                <span className={`${styles.small400} ${styles.secondary}`}>
                  $2190.84 USD
                </span>
              </div>
            </div>

            <div className={styles.cardRight}>
              <div className={`${styles.balanceBtn}`}>
                <span className={`${styles.secondary} ${styles.small400}`}>
                  Total Profit (SOL)
                </span>
                <span className={styles.small600}>+45.12</span>
              </div>
              <div className={`${styles.balanceBtn}`}>
                <span className={`${styles.secondary} ${styles.small400}`}>
                  Total Profit (USD)
                </span>
                <span className={styles.small600}>$3,142.78</span>
              </div>
              <div className={`${styles.balanceBtn}`}>
                <span className={`${styles.secondary} ${styles.small400}`}>
                  Buy Average
                </span>
                <span className={styles.small600}>13.54 SOL</span>
              </div>
            </div>
          </div>
          {/* square cards */}
          <div className={styles.cards}>
            {/* level card */}
            <div className={styles.squareCard}>
              <Image
                src="/images/fish.png"
                alt="shrimp"
                width={37}
                height={37}
              />
              <div className={styles.text}>
                <span className={`${styles.smaller400} ${styles.secondary}`}>
                  Your Level
                </span>
                <span
                  className={`${styles.semiboldTypo} ${styles.secondary100}`}
                >
                  Shrimp
                </span>
              </div>
            </div>
            {/* win rate card */}
            <div className={styles.squareCard}>
              <Image
                src="/images/flag.png"
                alt="shrimp"
                width={37}
                height={37}
              />
              <div className={styles.text}>
                <span className={`${styles.smaller400} ${styles.secondary}`}>
                  Win Rate
                </span>
                <span
                  className={`${styles.semiboldTypo} ${styles.secondary100}`}
                >
                  75%
                </span>
              </div>
            </div>
            {/* gain/loss card */}
            <div className={styles.squareCard}>
              <Image
                src="/images/gainloss.png"
                alt="shrimp"
                width={37}
                height={37}
              />
              <div className={styles.text}>
                <span className={`${styles.smaller400} ${styles.secondary}`}>
                  Gain/Loss
                </span>
                <span
                  className={`${styles.semiboldTypo} ${styles.secondary100}`}
                >
                  +12%
                </span>
              </div>
            </div>
            {/* hour glass */}
            <div className={styles.squareCard}>
              <Image
                src="/images/hourglass.png"
                alt="shrimp"
                width={37}
                height={37}
              />
              <div className={styles.text}>
                <span className={`${styles.smaller400} ${styles.secondary}`}>
                  Transactions
                </span>
                <span
                  className={`${styles.semiboldTypo} ${styles.secondary100}`}
                >
                  3000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* analyzer table */}
        <Market />
        {/* lists */}
        <TopList />
        {/* chart section */}
        <BalanceHistory/>
      </div>
    </div>
  );
};

export default Analyzer;
