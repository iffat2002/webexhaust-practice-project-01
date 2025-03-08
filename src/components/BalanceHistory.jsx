"use client";
import React from "react";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Dynamically import react-chartjs-2 to avoid SSR issues
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

// Register required Chart.js components & annotation plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

);


const BalanceHistory = () => {
  const data = {
    labels: [
      "Sun, 12",
      "Mon, 13",
      "Tue, 14",
      "Wed, 15",
      "Thu, 16",
      "Fri, 17",
      "Sat, 18",
    ],
    datasets: [
      {
        label: "SOL",
        data: [0.02, 0.023, 0.021, 0.024, 0.03131, 0.027, 0.025],
        borderColor: "#A78BFA", // Light Purple
        backgroundColor: "rgba(167, 139, 250, 0.2)",
        borderWidth: 1,
        // pointRadius: 4,
        pointRadius: (ctx) => {
          const maxIndex = ctx.dataset.data.indexOf(
            Math.max(...ctx.dataset.data)
          );
          return ctx.dataIndex === maxIndex ? 6 : 0; // Show dot only at the peak
        },
        pointHoverRadius: 6, // Show dot on hover or click
        pointHitRadius: 10,
        pointBackgroundColor: "#A78BFA",
        pointBorderColor: "black",
        pointBorderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Another Asset",
        data: [0.015, 0.017, 0.018, 0.019, 0.021, 0.02, 0.018],
        borderColor: "#F59E0B", // Yellow-Orange
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        borderWidth: 1,

        pointBackgroundColor: "#F59E0B",
        pointBorderColor: "black",
        pointBorderWidth: 2,
        pointRadius: (ctx) => {
          const maxIndex = ctx.dataset.data.indexOf(
            Math.max(...ctx.dataset.data)
          );
          return ctx.dataIndex === maxIndex ? 6 : 0; // Show dot only at the peak
        },
        pointHoverRadius: 6, // Show dot on hover or click
        pointHitRadius: 10,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1E1E1E",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(5)}`,
        },
      },
      // annotation: {
      //   annotations: {
      //     dashedLine: {
      //       type: "line",
      //       mode: "vertical",
      //       scaleID: "x",
      //       value: 4, // Vertical line at the peakIndex (Thu, 16)
      //       borderColor: "#ffffff",
      //       borderWidth: 1,
      //       borderDash: [5, 5], // Dashed effect

      //     },
      //   },
      // },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(255,255,255,0.1)", // Vertical grid lines
        },
        ticks: { color: "#B0B0B0" },
      },
      y: {
        grid: { display: false }, // Remove horizontal lines
        ticks: { display: false },
      },
    },
  };

  return (
    <div className={styles.history__container}>
      <div className={`${styles.chart} ${styles.analyzer}`}>
        <div className={styles.chart__header}>
          <h2 className={styles.semibold18}>Wallet Balance History</h2>
        </div>
        {/* chart */}
        <div style={{ width: "100%", paddingTop: "20px" }}>
          <Line data={data}  options={options} />
        </div>
      </div>
      <div className={`${styles.advertise} ${styles.analyzer}`}>
        <div className={styles.advertise__image}>
        <Image src="/images/ad.png" className={styles.full_width} alt="advertisement" width={270} height={226} />
        <div className={styles.contact} >
          <Image src="/images/wallet.png" alt="contact" width={32} height={32} />
          <Image src="/images/wallet2.png" alt="contact" width={32} height={32} />
          <Image src="/images/wallet.png" alt="contact" width={32} height={32} />
          <Image src="/images/wallet2.png" alt="contact" width={32} height={32} />
          <Image src="/images/wallet.png" alt="contact" width={32} height={32} />
        </div>

        </div>
        <div className={styles.advertise__text}>
          <h3 className={styles.semibold16}>Advertise Your Project</h3>
          <p className={`${styles.regularTypo} ${styles.secondary} `}>Promote your project to a larger audience and achieve your goals faster</p>
        </div>
        <button className={`${styles.btn} ${styles.p10}`}>Create Advertisement</button>
        <a className={`${styles.regularTypo} ${styles.primary} ${styles.text__center} ${styles.underline}`}>Learn more</a>
      </div>
    </div>
  );
};

export default BalanceHistory;
