import { ToolTwoTone, WarningTwoTone } from "@ant-design/icons";
import Link from "@docusaurus/Link";
import React from "react";

import styles from "./styles.module.less";

export default function paidCallout({ message }) {
  return (
    <div className={styles.root}>
      <div className={styles.icons}>
        <WarningTwoTone twoToneColor="#FFCD83" />
        <ToolTwoTone twoToneColor="#FFCD83" />
      </div>
      <span className={styles.message}>
        {message || (
          <span>
            This area is under construction. Please check back soon or {" "}
            <a href="mailto:support@paradisebots.net" target="_blank" rel="noreferrer">
              reach out
            </a>{" "}
            if you need help.
          </span>
        )}
      </span>
    </div>
  );
}
