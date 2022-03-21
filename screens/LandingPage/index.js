import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="container" style={styles.container}>
      <h1 className="title">Welcome to the ACME conference</h1>

      <p className="description">
        An interactive online expirience by the community, free for everyone.
      </p>

      <p>01 JANUARY 2022
        <code style={{ color: "blueviolet" }}>|</code>
        <b>ONLINE</b>
      </p>

      <div className="registerBox">
        <input className="registerInput"
          placeholder="Enter email to register free"
        />
        <button className="registerButton">Register</button>
      </div>

      <p>
        Learn more on
        <Link href={"https://github.com"} className="GitHubLinkInText"> GitHub</Link>
      </p>

      <footer className="footer">
        <p className="copyrightText">Copyright © 2022 Victor Dias Inc. All rights reserved.</p>
        <div>
          <p className="footerOptions">
            <Link href={"/"}>Source Code</Link>
            <p>|</p>
            <Link href={"/"}>Code of Conduct</Link>
            <p>|</p>
            <Link href={"/"}>Legal</Link>
          </p>
        </div>
      </footer>

    </div >
  );
}