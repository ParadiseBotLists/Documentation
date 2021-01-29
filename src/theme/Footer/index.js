/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import { Button, Form, Input } from "antd";
import classnames from "classnames";
import React from "react";
import { useMediaQuery } from "react-responsive";

import screens from "../../utils/responsive";
import styles from "./styles.module.css";

function Footer() {
  const isLargeScreen = useMediaQuery({ query: screens.large });

  return (
    <footer className={classnames("footer", styles.footer)}>
      <div className={classnames("container", styles.container)}>
        <div className={styles.footerRow}>
            <div className={styles.footerCol}>
              <a href="mailto:support@paradisebots.net">
                support@paradisebots.net
              </a>
              <p>2021 © Paradise Bots, LLC.</p>
            </div>
          {isLargeScreen && (
            <div className={styles.footerCol}>
              <form
                name="email-list"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="email-list" />
                <label htmlFor="footer-email">
                  Enter your email to receive updates from Paradise
                </label>
                <Input.Group>
                  <Input
                    id="footer-email"
                    name="email"
                    type="email"
                    style={{ width: "220px" }}
                  />
                  <Button htmlType="submit">Submit</Button>
                </Input.Group>
              </form>
            </div>
            }) 
      {isLargeScreen && (
          <div className={styles.footerCol}>
            {false && <Link to="https://paradisebots.net/discord">F.A.Q.</Link>}
            <a href="https://paradisebots.net/staff">Staff List</a>
            <a href="https://paradisebots.net/legal#privacy">Privacy Policy</a>
            <a href="https://paradisebots.net/legal#terms">Legal Terms</a>
          </div>
          })
        </div>
      </div>
    </footer>
  );
}

export default Footer;
