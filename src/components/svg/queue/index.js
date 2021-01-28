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
      <image 
         href="https://www.pngkey.com/png/detail/922-9220584_leaving-queue-icon.png"
         style={{ width: 200, height: 200, borderRadius: 30 }}
      />
    </svg>
  );
};
