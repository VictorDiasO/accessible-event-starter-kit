import styles from "../styles/Ticket.module.css"

export default function Ticket() {

  return (
    <div className={styles.ticketWrapper}>
      <div className={styles.ticket}>
        <div className={styles.ticketProfile}>
          <div className={styles.ticketProfileTop}>
            <div className={styles.ticketProfileTopImage}></div>
            <div className={styles.ticketProfileTopText}>
              <div className={styles.ticketProfileTopTextName}>
                Victor Dias
              </div>
              <div className={styles.ticketProfileTopTextProfile}>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.184.25C3.822.25.254 3.817.254 8.18c0 3.469 2.28 6.442 5.452 7.533.396.099.495-.198.495-.397v-1.388c-2.18.496-2.676-.99-2.676-.99-.396-.893-.892-1.19-.892-1.19-.694-.496.099-.496.099-.496.793.1 1.19.793 1.19.793.693 1.289 1.883.892 2.28.694.099-.496.297-.892.495-1.09-1.784-.199-3.568-.892-3.568-3.965 0-.892.297-1.586.793-2.082-.1-.198-.397-.991.099-2.082 0 0 .694-.198 2.18.793a6.391 6.391 0 011.983-.297c.694 0 1.388.1 1.982.297 1.487-.99 2.181-.793 2.181-.793.397 1.09.198 1.884.1 2.082.495.595.792 1.289.792 2.082 0 3.073-1.883 3.667-3.667 3.865.297.397.594.893.594 1.587v2.18c0 .198.1.496.595.397 3.172-1.09 5.452-4.064 5.452-7.534-.1-4.361-3.668-7.93-8.03-7.93z" fill="#8A8F98" fillRule="evenodd" /></svg>
                <a href="https://github.com/VictorDiasO" rel="noreferrer" target="_blank">VictorDiasO </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ticketNumberWrapper}>
          <div className={styles.ticketNumber}>№ 007391</div>
        </div>
      </div>
      {/* {
        VanillaTilt.init(document.querySelector(".ticket-wrapper"), {
          glare: true,
          max: 5,
          "max-glare": 0.16,
          "full-page-listening": true
        })
      } */}
    </div>
  );
}