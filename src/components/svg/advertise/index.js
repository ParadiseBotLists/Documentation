import classnames from "classnames";
import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";

export default () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 });

  return (
    <svg style={{ fill: '#758acf' }} ref={ref}
      className={classnames(styles.svg, { [styles.active]: inView })}
      viewBox="0 0 156 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <image 
         href="https://www.freepnglogos.com/uploads/advertising-png/advertising-icon-computer-mouse-ads-screen-15.jpg"
         style={{ height: 200, width: 400, fill: '#758acf'}}
      />
    </svg>
  );
};
