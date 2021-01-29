import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import BoilerplateSvg from "../components/svg/boilerplate";
import SAMLSvg from "../components/svg/saml";
import QueueSvg from "../components/svg/queue";
import AdSvg from "../components/svg/advertise";
import TeamDocsSvg from "../components/svg/team_docs";
import TitleWithMarker from "../components/titleWithMarker/index";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Goodbye Queue Times</>,
    description: (
      <>
       Tired of waiting weeks on end for your bot to be approved? We are to that's why at Paradise Bots
       your bot will be approved almost as fast as it was added, We strive for a maximum 3 day turnaround on queue times.
       Regardless of the situation at hand there is usually always someone online and ready to test your bot. 
      </>
    ),
   
  },
  {
    title: <>Hello Advertising Freedom</>,
    description: (
      <>
       Tired of rules and regulations holding you back from your true potential?
       Well worry no more, we don't care about the Discord Terms of Service anymore
       then a normal discord user is expected to, With that being said we don't take to
       kindly to the blatantly obvious (racism, lolis, nsfw content) aside from that we have
       No limits as to what your bot can do or what features it has (auto role, auto change colors)
       we don't care as long as you follow the obvious terms.
      </>
    ),
   
  },
];

function Home() {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <Layout title="Home">
      <div className={styles.heroContainer}>
        <header className={classnames("hero", styles.heroBanner)}>
          <div className={styles.heroCopy}>
            <p>Check out our docs for information and common use cases regarding the Paradise Bots API.</p>
            <div className={styles.buttons}>
              <Link to={useBaseUrl("docs/quick-start")}>
                <Button ghost size="large" className={styles.heroBtn}>
                  View our Docs
                </Button>
              </Link>
            </div>
          </div>
          {isLargeScreen && (
            <img
              className={styles.heroImage}
              src={"/img/ParadiseBotsLogo.png"}
              alt="Paradise Bots Logo"
              style={{ width: 300, height: 300, position: 'center' }}
            />
          )}
        </header>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            {features.map(({ title, description } , idx) => (
              <div key={idx} className={classnames("row", styles.row)}>
                <div className="col">
                  <TitleWithMarker title={title} />
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
