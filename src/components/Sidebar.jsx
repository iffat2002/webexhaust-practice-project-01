import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const menuItems = [
  {
    text: "Analyzer",
    icon: "/images/status-up.png",
    content: "Analyzer Content",
  },
  {
    text: "Matches",
    icon: "/images/status-up.png",
    content: "Matches Content",
  },
  { text: "Quests", icon: "/images/status-up.png", content: "Quests Content" },
  {
    text: "Profile",
    icon: "/images/status-up.png",
    content: "Profile Content",
  },
  { text: "Events", icon: "/images/status-up.png", content: "Events Content" },
  { text: "Ads", icon: "/images/status-up.png", content: "Ads Content" },
  {
    text: "Boost Token",
    icon: "/images/status-up.png",
    content: "Boost Token Content",
  },
  {
    text: "Referrals",
    icon: "/images/status-up.png",
    content: "Referrals Content",
  },
];
const Sidebar = ({open , handleToggle}) => {
  const [activeContent, setActiveContent] = useState("Analyzer Content");
  return (
    <div className={`${styles.sidebar}  ${open && styles.show}`}>
      <div>
        <div className={styles.menu}>
          <Image className={styles.logo} src="/images/logo.png" alt="logo" width={102} height={28} />
          <div className={styles.img_icon}>
          {open ?  <Image onClick={handleToggle} src="/images/close.svg" alt="logo" width={18} height={18} /> :  <Image src="/images/menu.svg" alt="logo" width={18} height={18} />}
          </div>
        </div>
        <div className={styles.mainMenu}>
          <h3 className={styles.regularTypo}>MAIN MENU</h3>
          <ul className={styles.mt12}>
            {menuItems.map((item) => (
              <li
                key={item.text}
                className={`${styles.menuItem} ${
                  item.content === activeContent ? styles.activeMenu : styles.inactive
                } `}
                onClick={() => setActiveContent(item.content)}
              >
                <Image src={item.icon} alt={item.text} width={16} height={16} />
                <span className={styles.mediumTypo}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.menuItem}>
          <Image
            src="/images/setting.png"
            alt="setting"
            width={16}
            height={16}
          />
          <span className={`${styles.mediumTypo} ${styles.activecolor}`}>Settings</span>
        </div>
        <div className={`${styles.menuItem} ${styles.mt8}`}>
          <Image
            src="/images/info-circle.png"
            alt="setting"
            width={16}
            height={16}
          />
          <span className={`${styles.mediumTypo}  ${styles.activecolor}`}>Help & Center</span>
        </div>
        <div className={styles.profile}>
          <div className={` ${styles.flex} ${styles.gap10}`}>
            <Image
              src="/images/profile.png"
              alt="profile"
              width={32}
              height={32}
            />
            <div>
              <span className={` ${styles.mediumTypo} ${styles.primary}`}>
                Alex
              </span>
              <span className={styles.regularTypo}>alex@gmail.com</span>
            </div>
          </div>
          <Image
            src="/images/selector.png"
            alt="arrow"
            width={12}
            height={12}
          />
        </div>
      </div>
      </div>

  );
};

export default Sidebar;
