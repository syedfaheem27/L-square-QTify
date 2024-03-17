import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import styles from "./Footer.module.css";

const Footer = () => {
  const [opens, setOpens] = useState(null);

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section>FAQS</section>
        <section className={styles.faqs}>
          <div>
            <Accordion opens={opens} setOpens={setOpens}>
              <Accordion.Header text={"Is Qtify free to use?"} open={0} />
              <Accordion.Body open={0}>
                Yes! It is 100% free, and has 0% ads!
              </Accordion.Body>
            </Accordion>
          </div>

          <div>
            <Accordion opens={opens} setOpens={setOpens}>
              <Accordion.Header
                text={"Can I download and listen to songs offline?"}
                open={1}
              />
              <Accordion.Body open={1}>
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </Accordion.Body>
            </Accordion>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
