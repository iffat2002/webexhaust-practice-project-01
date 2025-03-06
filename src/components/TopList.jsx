import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
const TopList = () => {
  const gainsData = [
    { id: 1, icon: "/images/babyavatar.png", token: "CATS", gained: "$23.8K" },
    {
      id: 2,
      icon: "/images/babyavatar.png",
      token: "PONKIE",
      gained: "$54.5K",
    },
    {
      id: 3,
      icon: "/images/babyavatar.png",
      token: "DOLPHINWIF",
      gained: "$6.6K",
    },
  ];

  const holdingsData = [
    {
      id: 1,
      icon: "/images/babyavatar.png",
      token: "GOAT",
      amount: "9,101.256",
      price: "$13.8K",
    },
    {
      id: 2,
      icon: "/images/babyavatar.png",
      token: "RHEA",
      amount: "5,101.256",
      price: "$4.5K",
    },
    {
      id: 3,
      icon: "/images/babyavatar.png",
      token: "GenBeta",
      amount: "3,101.256",
      price: "$6.6K",
    },
  ];
  return (
    <div className={styles.listContainer}>
      <div className={`${styles.gains} ${styles.analyzer}`}>
        <h2 className={styles.semibold18}>Top 3 Gains</h2>

        <table className={styles.list}>
          <thead>
            <tr>
              <th style={{ borderRadius: "6px 0 0 6px" }}>Top</th>
              <th>Token</th>
              <th style={{ borderRadius: "0px 6px 6px 0px" }}>$Gained</th>
            </tr>
          </thead>
          <tbody>
            {gainsData.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td
                  className={`${styles.flex} ${styles.alignCenter} ${styles.gap10}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.token}
                    width={22}
                    height={22}
                    className={` ${styles.icon}`}
                  />
                  <span>{item.token}</span>
                </td>
                <td>
                  <span>{item.gained}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${styles.gains} ${styles.analyzer}`}>
        <h2 className={styles.semibold18}>Top 3 Holdings</h2>

        <table className={styles.list}>
          <thead>
            <tr>
              <th style={{ borderRadius: "6px 0 0 6px" }}>Top</th>
              <th>Token</th>
              <th>Token amount</th>
              <th style={{ borderRadius: "0px 6px 6px 0px" }}>$Price</th>
            </tr>
          </thead>
          <tbody>
            {holdingsData.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td
                  className={`${styles.flex} ${styles.alignCenter} ${styles.gap10}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.token}
                    width={22}
                    height={22}
                    className={` ${styles.icon}`}
                  />
                  <span>{item.token}</span>
                </td>
                <td>{item.amount}</td>
                <td>
                  <span>{item.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopList;
