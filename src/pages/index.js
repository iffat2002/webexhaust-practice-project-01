import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Analyzer from "@/components/Analyzer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [open,setOpen] = useState(false);
  console.log("open", open)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [open]);

  
const handleToggle = () => {

setOpen(!open)
}
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${inter.variable}`}>
        {/* sidebar */}
        <Sidebar open={open} handleToggle={handleToggle} />
        {/* main content */}
        <Analyzer  open={open} handleToggle={handleToggle} />
        
      </div>
    </>
  );
}
