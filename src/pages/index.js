import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { Button } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import BoilerplateSvg from "../components/svg/boilerplate";
import SAMLSvg from "../components/svg/saml";
import TeamDocsSvg from "../components/svg/team_docs";
import TitleWithMarker from "../components/titleWithMarker/index";
import screens from "../utils/responsive";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Paradise Bots Docs.</>,
    description: (
      <>
        This site contains support documentation on the Paradise Bot List project 
        and its companion Web App & API, including documentation about 
        features, management bot commands, and tutorials on common use cases.
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
            <p>Add your bot and get started with the Paradise API.</p>
            <div className={styles.buttons}>
              <Link to={useBaseUrl("docs/quick-start")}>
                <Button ghost size="large" className={styles.heroBtn}>
                  View our Docs
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            {features.map(({ title, description, Component }, idx) => (
              <div key={idx} className={classnames("row", styles.row)}>
                <div className="col">
                  <TitleWithMarker title={title} />
                  <p>{description}</p>
                </div>
                <div className={classnames("col", styles.imageContainer)}>
                  <Component />
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
