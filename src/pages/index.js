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
        Want to sell to Enterprise customers? SAML-based SSO is a requirement.
        Osso integrates with all of the most popular Identity Providers so that
        you can check off another box on your sales pitch and start closing
        bigger deals.
      </>
    ),
   
  },
  {
    title: <>Hello Advertising Freedom</>,
    description: (
      <>
        With its intuitive UI and custom docs, Osso will enable your customer
        success teams (or users!) to handle onboarding and support, freeing up
        your developers to focus on higher-priority work.
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
              style={{ width: 300, height: 300, position: top -30 }}
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
