import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Page.module.css";
import logo from "../public/icon-192x192.png";
import TicketComponent from "../components/ticket";
import { useState } from "react";

// import logo from "../public/favicon.ico";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.navBarContainer}>
      </div>
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

      <h1 className={styles.title}>Welcome to the ACME conference</h1>

      <p className={styles.description}>
        An interactive online expirience by the community, free for everyone.
      </p>

      <p className={styles.date}>01 JANUARY 2022
        <code className={styles.dateDetail}> | </code>
        <b>100% ONLINE</b>
      </p>

      <form className={styles.registerBox}>
        <div className={styles.formRow}>
          <label className={styles.formInputLabel}>
            <input className={styles.registerInput}
              placeholder="Enter email to register free"
              onChange={e => setEmail(e.target.value)}
            />
            {console.log(email)}
          </label>
          <button className={styles.registerButton}>Register</button>
        </div>
      </form>

      <p className={styles.warning}>
        Learn more on
        <Link href={"https://github.com"} className={styles.GitHubLinkInText}> GitHub</Link>
      </p>

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

      {/* <TicketComponent /> */}
    </div >
  );
}