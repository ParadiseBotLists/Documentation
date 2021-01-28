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
      <image href="https://icon2.cleanpng.com/20180705/xfb/kisspng-geralt-of-rivia-samsung-the-witcher-queue-icon-5b3e429e825e17.351478151530806942534.jpg" />
    </svg>
  );
};
