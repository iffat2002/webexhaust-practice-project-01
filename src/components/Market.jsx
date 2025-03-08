import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const data = [
  {
    id: 1,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 2,
    icon: "/images/babyavatar.png",
    token: "RELIQ",
    tokenBuy: 1630933.34,
    solUsed: 5.0,
    usdtUsed: 1090.55,
    buySell: "1/1",
    tokenSold: 1630933.34,
    solReceived: 0.1,
    usdtReceived: 21.1,
    solEarned: -4.9,
    profitLoss: "98.07%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 3,
    icon: "/images/babyavatar.png",
    token: "LUxNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 4,
    icon: "/images/babyavatar.png",
    token: "JDJDKM",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 5,
    icon: "/images/babyavatar.png",
    token: "DSJFIJ",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 6,
    icon: "/images/babyavatar.png",
    token: "LAKSJ",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 7,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 8,
    icon: "/images/babyavatar.png",
    token: "UERNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 9,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 10,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 11,
    icon: "/images/babyavatar.png",
    token: "SDKJO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 12,
    icon: "/images/babyavatar.png",
    token: "LEKRO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 13,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 14,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 15,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 16,
    icon: "/images/babyavatar.png",
    token: "SLDK",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 17,
    icon: "/images/babyavatar.png",
    token: "ASOW",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 18,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 19,
    icon: "/images/babyavatar.png",
    token: "LUNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 20,
    icon: "/images/babyavatar.png",
    token: "MFNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 21,
    icon: "/images/babyavatar.png",
    token: "SDNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 22,
    icon: "/images/babyavatar.png",
    token: "A,SDS",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 23,
    icon: "/images/babyavatar.png",
    token: "AAAA",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 24,
    icon: "/images/babyavatar.png",
    token: "BBB",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 25,
    icon: "/images/babyavatar.png",
    token: "SKDO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 26,
    icon: "/images/babyavatar.png",
    token: "LUxNO",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
  {
    id: 27,
    icon: "/images/babyavatar.png",
    token: "JDJDKM",
    tokenBuy: 418998.56,
    solUsed: 5.0,
    usdtUsed: 1104.3,
    buySell: "8/5",
    tokenSold: 418998.56,
    solReceived: 0.86,
    usdtReceived: 189.89,
    solEarned: 4.14,
    profitLoss: "-82.89%",
    lastSell: "6/1/2025 17:56:30",
  },
];


export default function Market() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8; 

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get data for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.marketContainer}>
      <div className={styles.analyzer}>
        {/* heading/searchbar */}
        <div className={styles.analyzerHeader}>
          <h2 className={styles.semibold18}>Analyzer</h2>
          <div className={styles.flex}>
            <div className={styles.searchWrapper}>
              <Image
                src="/images/search-normal.png"
                alt="filter search"
                width={16}
                height={16}
                className={styles.filterIcon}
              />

              <input
                type="text"
                placeholder="Search anything..."
                className={styles.analyzerSearch}
              />
            </div>
            <div className={`${styles.wallet} ${styles.fill}`}>
              <Image
                src="/images/filter.png"
                alt="wallet"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        {/* table */}
        <div className={styles.tableWrapper}>
        <div  className={styles.tablescroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ borderRadius: "6px 0 0 6px" }}>#</th>
              <th>Icon</th>
              <th>Token</th>
              <th>Token Buy</th>
              <th>SOL Used</th>
              <th>USDT Used</th>
              <th>Buy/Sell</th>
              <th>Token Sold</th>
              <th>SOL Received</th>
              <th>USDT Received</th>
              <th>SOL Earned/Lost</th>
              <th>Profit/Loss</th>
              <th>Last Sell</th>
              <th style={{ borderRadius: "0px 6px 6px 0px" }}>Link</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Image
                    src={item.icon}
                    alt={item.token}
                    width={22}
                    height={22}
                    className={styles.icon}
                  />
                </td>
                <td>{item.token}</td>
                <td>{item.tokenBuy}</td>
                <td>
                  <Image
                    src="/images/union.png"
                    width={12}
                    className={styles.mr4}
                    height={9}
                  />
                  {item.solUsed}
                </td>
                <td>${item.usdtUsed}</td>
                <td>{item.buySell}</td>
                <td>{item.tokenSold}</td>
                <td>
                  <Image
                    src="/images/union.png"
                    width={12}
                    className={styles.mr4}
                    height={9}
                  />
                  {item.solReceived}
                </td>
                <td>${item.usdtReceived}</td>
                <td
                  className={
                    item.solEarned < 0 ? styles.negativeFade : styles.positive
                  }
                >
                  <Image
                    src="/images/union.png"
                    width={12}
                    className={styles.mr4}
                    height={9}
                  />
                  {item.solEarned}
                </td>
                <td
                  className={
                    item.profitLoss.includes("-")
                      ? styles.negative
                      : styles.positive
                  }
                >
                  {item.profitLoss}
                </td>
                <td>{item.lastSell}</td>
                <td>
                  <Image
                    src={"/images/link.png"}
                    alt="link"
                    width={22}
                    height={22}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        {/* pagination */}
        <div className={styles.pagination}>
          <div className={styles.pageButton} onClick={goToPrevPage}>
            <Image src="/images/vector.svg" width={7} height={14} />
          </div>
          <div className={styles.btncount}>
         
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              className={`${styles.selectBtn} ${styles.regularTypo} ${
                currentPage === page ? styles.selected : styles.secondary
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </div>
          ))}
           
          </div>
          <div className={styles.pageButton } onClick={goToNextPage}>
            <Image src="/images/arrow-right.svg" width={7} height={14} />
          </div>
        </div>
      </div>

      <div className={styles.sideCards}>
        {/* card */}
        <div className={`${styles.squareCard}`}>
          <Image src="/images/sword.png" alt="shrimp" width={32} height={32} />
          <div className={styles.text}>
            <span className={`${styles.semiboldTypo} ${styles.secondary100}`}>
              Create Quest
            </span>
            <div className={`${styles.flex} ${styles.spacebw}`}>
              <span className={`${styles.smaller400} ${styles.secondary}`}>
                New challenge for users
              </span>
              <Image
                src="/images/arrow-right.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* card*/}
        <div className={`${styles.squareCard}`}>
          <Image src="/images/trophy.png" alt="shrimp" width={32} height={32} />
          <div className={styles.text}>
            <span className={`${styles.semiboldTypo} ${styles.secondary100}`}>
              View Leaderboard
            </span>
            <div className={`${styles.flex} ${styles.spacebw}`}>
              <span className={`${styles.smaller400} ${styles.secondary}`}>
                New challenge for users
              </span>
              <Image
                src="/images/arrow-right.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
         {/* card */}
         <div className={`${styles.squareCard}`}>
          <Image src="/images/sword.png" alt="shrimp" width={32} height={32} />
          <div className={styles.text}>
            <span className={`${styles.semiboldTypo} ${styles.secondary100}`}>
              Create Quest
            </span>
            <div className={`${styles.flex} ${styles.spacebw}`}>
              <span className={`${styles.smaller400} ${styles.secondary}`}>
                New challenge for users
              </span>
              <Image
                src="/images/arrow-right.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
         {/* card */}
         <div className={`${styles.squareCard}`}>
          <Image src="/images/sword.png" alt="shrimp" width={32} height={32} />
          <div className={styles.text}>
            <span className={`${styles.semiboldTypo} ${styles.secondary100}`}>
              Create Quest
            </span>
            <div className={`${styles.flex} ${styles.spacebw}`}>
              <span className={`${styles.smaller400} ${styles.secondary}`}>
                New challenge for users
              </span>
              <Image
                src="/images/arrow-right.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
