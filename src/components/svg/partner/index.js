import classnames from "classnames";
import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";

export default () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 });

  return (
    <svg ref={ref}
      className={classnames(styles.svg, { [styles.active]: inView })}
      viewBox="0 0 156 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <image href="https://cdn.discordapp.com/attachments/747390406722977863/760791912642117661/image0.png" height="100" width="100"/>
    </svg>
  );
};
