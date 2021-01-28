import {
  GithubFilled,
  HomeFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { Card, Col, Layout as AntLayout, Row } from "antd";
import classnames from "classnames";
import React from "react";

import TitleWithMarker from "../../components/titleWithMarker/index";
import styles from "./styles.module.css";

function Pricing() {
  return (
    <Layout title="About us" description="All about our company and our team.">
      <AntLayout.Content
        className={classnames("container margin-vert--xl", styles.container)}
      >
        <Row>
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.section}>
            <TitleWithMarker title="About Osso" />
            <p>
              Paradise is The Discord Bot List that strives to provide all Discord Bots & Bot Devs 
              With a little bit of Freedom!! A Discord Bot Lists purpose is to allow Developers 
              to Advertise their Bot for other people to use (No strings attached) 
              We allow you to do just that, Now days we see way to many Bot Lists 
              who focus to much on Policing the T.O.S. No offence of course to the good Bot Lists (You lnow who you are) 
              The only “Term” we “police” is where your Bot posts NSFW Content if any (NSFW Channels only)
              And of course with Paradise you can say goodbye to extended queue times.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.section}>
            <TitleWithMarker title="About Us-so" />
            <p>
              After losing work due to the pandemic, we founded Osso with the
              goal of working together on something that could help other
              business owners as they grew their own companies. After a few
              months of user research, development time, and QA, we launched to
              help make SAML SSO more accessible to startups at all stages of
              growth.
            </p>
            <p>
              We have led and delivered complex product launches for companies
              like WeWork, Clearbit, imgix, VaynerMedia, and Vistaprint. We’re
              also hopelessly addicted to side projects.
            </p>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col sm={24} md={{ span: 16, offset: 4 }}>
            <TitleWithMarker title="The team" />
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={{ span: 20, offset: 4 }} className={styles.section}>
            <Row gutter={[16, 0]}>
              <Col xs={12} md={6}>
                <Card
                  cover={<img src={useBaseUrl("img/sam_bauch.png")} />}
                  className={styles.personCard}
                  bordered={false}
                  headStyle={{}}
                  bodyStyle={{
                    display: "flex",
                    flexGrow: "1",
                    flexDirection: "column",
                    padding: "16px 0 0",
                  }}
                >
                  <Card.Meta title="Sam Bauch" description="Engineering" />
                  <p className={styles.prev}>
                    Previously:
                    <br /> Engineering @ Clearbit, WeWork, VaynerMedia
                  </p>
                  <div className={styles.social}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/in/sambauch"
                    >
                      <LinkedinFilled />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/sbauch"
                    >
                      <GithubFilled />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/sammybauch"
                    >
                      <TwitterSquareFilled />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card
                  cover={<img src={useBaseUrl("img/sam_carmichael.png")} />}
                  className={styles.personCard}
                  bordered={false}
                  headStyle={{}}
                  bodyStyle={{
                    display: "flex",
                    flexGrow: "1",
                    flexDirection: "column",
                    padding: "16px 0 0",
                  }}
                >
                  <Card.Meta title="Sam Carmichael" description="Design" />
                  <p className={styles.prev}>
                    Previously:
                    <br /> Product design @ WeWork, Founder @ The
                    UpStanding Desk
                  </p>
                  <div className={styles.social}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/in/samcarmichael"
                    >
                      <LinkedinFilled />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/sccarmichael"
                    >
                      <TwitterSquareFilled />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://sam-carmichael.com"
                    >
                      <HomeFilled />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card
                  cover={<img src={useBaseUrl("img/michael_teevan.png")} />}
                  className={styles.personCard}
                  bordered={false}
                  headStyle={{}}
                  bodyStyle={{
                    display: "flex",
                    flexGrow: "1",
                    flexDirection: "column",
                    padding: "16px 0 0",
                  }}
                >
                  <Card.Meta title="Michael Teevan" description="Sales" />
                  <p className={styles.prev}>
                    Previously:
                    <br /> Sales @ Clearbit, imgix, Nexonia / Certify
                  </p>
                  <div className={styles.social}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://linkedin.com/in/michaelteevan"
                    >
                      <LinkedinFilled />
                    </a>
                  </div>
                </Card>
              </Col>
              {false && (
                <Col xs={12} md={6}>
                  <Card
                    cover={<img src={useBaseUrl("img/sam_bauch.png")} />}
                    className={styles.personCard}
                    bordered={false}
                    headStyle={{}}
                    bodyStyle={{
                      display: "flex",
                      flexGrow: "1",
                      flexDirection: "column",
                      padding: "16px 0 0",
                    }}
                  >
                    <Card.Meta title="Sam Bauch" description="Engineering" />
                    <p className={styles.prev}>
                      Previously:
                      <br /> Engineering @ Clearbit, WeWork, VaynerMedia
                    </p>
                    <div className={styles.social}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/sambauch"
                      >
                        <LinkedinFilled />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/sambauch"
                      >
                        <GithubFilled />
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/sambauch"
                      >
                        <TwitterSquareFilled />
                      </a>
                    </div>
                  </Card>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </AntLayout.Content>
    </Layout>
  );
}

export default Pricing;
