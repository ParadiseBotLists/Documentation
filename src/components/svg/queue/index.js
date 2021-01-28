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
         href="https://static.thenounproject.com/png/640515-200.png"
         style={{ color: 'white', width: 300, height: 300, borderRadius: 30 }}
      />
    </svg>
  );
};
