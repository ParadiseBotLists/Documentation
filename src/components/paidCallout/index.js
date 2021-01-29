import { SmileTwoTone, SoundTwoTone } from "@ant-design/icons";
import Link from "@docusaurus/Link";
import React from "react";

import styles from "./styles.module.less";

export default function paidCallout({ message }) {
  return (
    <div className={styles.paidRoot}>
      <div className={styles.icons}>
        <SmileTwoTone twoToneColor="#4E61A5" />
        <SoundTwoTone twoToneColor="#4E61A5" />
      </div>
      <span className={styles.message}>
        {message || (
          <span>
            The content of this article applies to Paradise Bots
              and is not relevant to our{" "}
            <Link to="/docs">docs</Link>. If you&apos;re already a
            Paradise user,{" "}
            <Link to="https://paradisebots.net/discord">
              Go to our discord
            </Link>
            .
          </span>
        )}
      </span>
    </div>
  );
}
