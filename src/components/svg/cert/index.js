import classnames from "classnames";
import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";

export default () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 });

  return (
    <svg className= xmlns="http://www.w3.org/2000/svg">
      <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200"/>
    </svg>
  );
};
