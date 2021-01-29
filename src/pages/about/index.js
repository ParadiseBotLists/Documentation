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
            <TitleWithMarker title="About Paradise Bots" />
            <p>
              Paradise is The Discord Bot List that strives to provide all Discord Bots & Bot Devs 
              With a little bit of Freedom!! A Discord Bot Lists purpose is to allow Developers 
              to Advertise their Bot for other people to use (No strings attached) 
              We allow you to do just that, Now days we see way to many Bot Lists 
              who focus to much on Policing the T.O.S. No offence of course to the good Bot Lists (You know who you are) 
              The only “Term” we “police” is where your Bot posts NSFW Content if any (NSFW Channels only)
              And of course with Paradise you can say goodbye to extended queue times.
            </p>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col sm={24} md={{ span: 16, offset: 4 }}>
            <TitleWithMarker title="The Team" />
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={{ span: 20, offset: 4 }} className={styles.section}>
            <Row gutter={[16, 0]}>
              <Col xs={12} md={6}>
                <Card
                  cover={<img style={{ borderRadius: 20 }} src={useBaseUrl("https://media.discordapp.net/attachments/734686866690932767/804417937863082014/image0.jpg")} />}
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
                  <Card.Meta title="Toxic Dev" description="Founder" />
                  <p className={styles.prev}>
                    Title(s):
                    <br /> Developer, Web Admin
                  </p>
                  <div className={styles.social}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://toxicdev.me"
                    >
                      <HomeFilled />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/TheRealToxicDev"
                    >
                      <GithubFilled />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/TheRealToxicDev"
                    >
                      <TwitterSquareFilled />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card
                  cover={<img src={useBaseUrl("https://media.discordapp.net/attachments/630858840585535498/804622012830973972/darling-in-the-franxx-edits-tumblr-darling-in-the-franxx-transparent-250_250.png")} />}
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
                  <Card.Meta title="SunRise" description="Co-Founder" />
                  <p className={styles.prev}>
                    Title(s):
                    <br /> Web Admin, Server Admin
                    UpStanding Desk
                  </p>
                  <div className={styles.social}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/Official_Sun"
                    >
                      <TwitterSquareFilled />
                    </a>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </AntLayout.Content>
    </Layout>
  );
}

export default Pricing;
