import TicketComponent from '../components/ticket';
import styles from '../styles/Finished.module.css';
import Image from "next/image";
import Link from "next/link";
import logo from "../public/icon-192x192.png";

import { DiGithubBadge } from "react-icons/di";

export default function Finished() {
  return (
    <div className={styles.container}>
      <footer className={styles.navBar}>
        {/* <Image className={styles.ImageLogo} src={logo} alt="Logo" width={50} height={15} /> */}

        <Link href={""}> Live Stage </Link>
        {/* <code> | </code> */}
        <Link href={""}> Vercel Stage </Link>
        {/* <code> | </code> */}
        <Link href={""}> 100MS Stage </Link>
        {/* <code> | </code> */}
        <Link href={""}> Schedule </Link>
        {/* <code> | </code> */}
        <Link href={""}> Speakers </Link>
        {/* <code> | </code> */}
        <Link href={""}> Expo </Link>
        {/* <code> | </code> */}
        <Link href={""}> Jobs </Link>

        <button>Try Demo</button>
      </footer>

      <h1 className={styles.title}>You&apos;re in.</h1>
      <h1 className={styles.title2}>Make it Unique</h1>
      <h3 className={styles.description}>Generate a unique ticket image with your GitHub profile.</h3>

      <button className={styles.generateGitCard}>
        <DiGithubBadge fontSize={25} className={styles.gitIcon} />
        Generate with GitHub
      </button>
      <p className={styles.warning}>Or</p>
      <button className={styles.goToLiveStage}>Go to Live Stage</button>

      <div className={styles.ticket}>
        <TicketComponent className={styles.ticket} />
      </div>

      <footer className={styles.footer}>
        <p className={styles.copyrightText}>Copyright © 2022 Victor Dias Inc. All rights reserved.</p>
        <div className={styles.footerOptions}>
          <Link href={"/"}>Source Code</Link>
          <code> | </code>
          <Link href={"https://www.notion.so/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78"}>Code of Conduct</Link>
          <code> | </code>
          <Link href={"https://vercel.com/legal/privacy-policy"}>Legal</Link>
        </div>
      </footer>
    </div>
  );
}