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
      <image href="https://www.pngkey.com/png/detail/922-9220584_leaving-queue-icon.png" />
      <path
        d="M75.8712 249.55C75.5648 249.526 75.3476 249.237 75.4145 248.937L77.5482 239.369C77.678 238.787 78.5343 238.88 78.5362 239.477L78.5661 249.278C78.567 249.585 78.2935 249.82 77.9893 249.778C77.2894 249.682 76.5832 249.606 75.8712 249.55Z"
        className={styles.svgElem1}
      ></path>
      <path
        d="M83.5988 251.009C83.305 250.92 83.1552 250.592 83.2848 250.313L87.4193 241.435C87.671 240.894 88.4875 241.169 88.3612 241.752L86.2876 251.325C86.2226 251.626 85.9043 251.797 85.616 251.69C84.9525 251.444 84.2799 251.217 83.5988 251.009Z"
        className={styles.svgElem2}
      ></path>
      <path
        d="M90.8269 254.108C90.5597 253.957 90.4843 253.605 90.6705 253.361L96.6167 245.577C96.9787 245.103 97.717 245.546 97.4686 246.089L93.3858 254.998C93.2576 255.277 92.9097 255.376 92.651 255.209C92.0547 254.825 91.4464 254.457 90.8269 254.108Z"
        className={styles.svgElem3}
      ></path>
      <path
        d="M97.2191 258.692C96.9904 258.487 96.9924 258.127 97.2268 257.928L104.71 251.602C105.166 251.217 105.791 251.809 105.432 252.285L99.5293 260.111C99.3441 260.357 98.9834 260.378 98.7665 260.16C98.2652 259.656 97.7491 259.166 97.2191 258.692Z"
        className={styles.svgElem4}
      ></path>
      <path
        d="M102.485 264.54C102.305 264.291 102.384 263.939 102.656 263.796L111.322 259.228C111.849 258.951 112.333 259.663 111.88 260.051L104.438 266.421C104.204 266.621 103.848 266.565 103.682 266.305C103.3 265.705 102.901 265.116 102.485 264.54Z"
        className={styles.svgElem5}
      ></path>
      <path
        d="M106.376 271.384C106.254 271.102 106.408 270.775 106.704 270.694L116.142 268.101C116.717 267.943 117.036 268.742 116.51 269.024L107.878 273.641C107.607 273.786 107.27 273.654 107.165 273.365C106.921 272.695 106.658 272.035 106.376 271.384Z"
        className={styles.svgElem6}
      ></path>
      <path
        d="M108.699 278.907C108.64 278.606 108.86 278.32 109.167 278.304L118.944 277.803C119.54 277.773 119.679 278.623 119.105 278.784L109.678 281.437C109.381 281.52 109.081 281.318 109.041 281.013C108.947 280.305 108.833 279.602 108.699 278.907Z"
        className={styles.svgElem7}
      ></path>
      <path
        d="M109.348 286.755C109.355 286.447 109.632 286.215 109.935 286.266L119.598 287.883C120.186 287.981 120.139 288.841 119.544 288.875L109.765 289.436C109.458 289.454 109.209 289.193 109.234 288.887C109.292 288.182 109.33 287.471 109.348 286.755Z"
        className={styles.svgElem8}
      ></path>
      <path
        d="M108.311 294.562C108.385 294.264 108.705 294.096 108.99 294.211L118.072 297.867C118.625 298.089 118.394 298.919 117.806 298.824L108.143 297.268C107.84 297.219 107.652 296.911 107.743 296.618C107.952 295.941 108.141 295.256 108.311 294.562Z"
        className={styles.svgElem9}
      ></path>
      <path
        d="M105.616 301.96C105.752 301.684 106.1 301.59 106.354 301.763L114.438 307.289C114.93 307.625 114.526 308.386 113.972 308.167L104.867 304.566C104.581 304.453 104.464 304.111 104.616 303.844C104.967 303.227 105.3 302.599 105.616 301.96Z"
        className={styles.svgElem10}
      ></path>
      <path
        d="M101.39 308.6C101.582 308.36 101.943 308.343 102.153 308.567L108.867 315.708C109.275 316.142 108.717 316.798 108.223 316.465L100.099 310.985C99.8446 310.813 99.8037 310.455 100.009 310.227C100.485 309.698 100.945 309.156 101.39 308.6Z"
        className={styles.svgElem11}
      ></path>
      <path
        d="M95.8422 314.181C96.0814 313.987 96.4378 314.047 96.5954 314.312L101.618 322.73C101.924 323.242 101.238 323.763 100.827 323.331L94.0719 316.233C93.8604 316.011 93.8972 315.652 94.1465 315.473C94.7246 315.059 95.2901 314.628 95.8422 314.181Z"
        className={styles.svgElem12}
      ></path>
      <path
        d="M89.229 318.442C89.5041 318.305 89.8392 318.44 89.9365 318.732L93.0322 328.027C93.2207 328.593 92.4387 328.954 92.1301 328.444L87.0608 320.065C86.9019 319.802 87.0151 319.46 87.2973 319.339C87.9513 319.058 88.5954 318.759 89.229 318.442Z"
        className={styles.svgElem13}
      ></path>
      <path
        d="M81.8544 321.175C82.1525 321.1 82.45 321.304 82.4823 321.61L83.5103 331.353C83.5728 331.946 82.7315 332.131 82.5396 331.566L79.3869 322.289C79.288 321.998 79.4727 321.688 79.7747 321.631C80.4753 321.499 81.1687 321.346 81.8544 321.175Z"
        className={styles.svgElem14}
      ></path>
      <path
        d="M74.0662 322.246C74.3731 322.238 74.6197 322.501 74.5856 322.806L73.4973 332.551C73.4311 333.143 72.5696 333.143 72.5034 332.551L71.4151 322.806C71.381 322.501 71.6275 322.238 71.9345 322.246C72.2886 322.257 72.6439 322.262 73.0004 322.262C73.3568 322.262 73.7121 322.257 74.0662 322.246Z"
        className={styles.svgElem15}
      ></path>
      <path
        d="M66.2259 321.631C66.528 321.688 66.7127 321.998 66.6138 322.289L63.4611 331.566C63.2692 332.131 62.4279 331.946 62.4904 331.353L63.5184 321.61C63.5507 321.304 63.8482 321.1 64.1463 321.175C64.832 321.346 65.5254 321.499 66.2259 321.631Z"
        className={styles.svgElem16}
      ></path>
      <path
        d="M58.7034 319.339C58.9855 319.46 59.0987 319.802 58.9399 320.065L53.8706 328.444C53.562 328.954 52.78 328.593 52.9684 328.027L56.0642 318.732C56.1614 318.44 56.4966 318.305 56.7717 318.442C57.4053 318.759 58.0494 319.058 58.7034 319.339Z"
        className={styles.svgElem17}
      ></path>
      <path
        d="M51.8542 315.473C52.1035 315.652 52.1403 316.011 51.9288 316.233L45.1741 323.331C44.763 323.763 44.077 323.242 44.3825 322.73L49.4053 314.312C49.5629 314.047 49.9193 313.987 50.1585 314.181C50.7106 314.628 51.2761 315.059 51.8542 315.473Z"
        className={styles.svgElem18}
      ></path>
      <path
        d="M45.9916 310.227C46.197 310.455 46.1561 310.813 45.9016 310.985L37.7781 316.465C37.2838 316.798 36.7258 316.142 37.1342 315.708L43.8473 308.567C44.0578 308.343 44.4186 308.36 44.6106 308.6C45.0553 309.156 45.5158 309.698 45.9916 310.227Z"
        className={styles.svgElem19}
      ></path>
      <path
        d="M41.3847 303.844C41.5365 304.111 41.4196 304.453 41.1339 304.566L32.0286 308.167C31.4742 308.386 31.0704 307.625 31.5626 307.289L39.6469 301.763C39.9006 301.59 40.2491 301.684 40.3852 301.96C40.7004 302.599 41.0338 303.227 41.3847 303.844Z"
        className={styles.svgElem20}
      ></path>
      <path
        d="M38.258 296.618C38.3486 296.911 38.1609 297.219 37.8577 297.268L28.195 298.824C27.6064 298.919 27.3757 298.089 27.9288 297.867L37.0105 294.211C37.2959 294.096 37.6161 294.264 37.6893 294.562C37.8593 295.256 38.0491 295.941 38.258 296.618Z"
        className={styles.svgElem21}
      ></path>
      <path
        d="M36.7666 288.887C36.7919 289.193 36.5423 289.454 36.2358 289.436L26.4568 288.875C25.8616 288.841 25.8149 287.981 26.4029 287.883L36.0658 286.266C36.369 286.215 36.6455 286.447 36.653 286.755C36.6704 287.471 36.7085 288.182 36.7666 288.887Z"
        className={styles.svgElem22}
      ></path>
      <path
        d="M36.9599 281.013C36.9195 281.318 36.6193 281.52 36.3231 281.437L26.8955 278.784C26.3216 278.623 26.4611 277.773 27.0565 277.803L36.8337 278.304C37.1403 278.32 37.3602 278.606 37.3021 278.907C37.1681 279.602 37.0538 280.305 36.9599 281.013Z"
        className={styles.svgElem23}
      ></path>
      <path
        d="M38.8355 273.365C38.7302 273.654 38.3939 273.786 38.1227 273.641L29.4906 269.024C28.9649 268.742 29.284 267.943 29.8589 268.101L39.297 270.694C39.5932 270.775 39.7464 271.102 39.6244 271.384C39.3428 272.035 39.0796 272.695 38.8355 273.365Z"
        className={styles.svgElem24}
      ></path>
      <path
        d="M42.3182 266.305C42.1532 266.565 41.7965 266.621 41.563 266.421L34.1205 260.051C33.6675 259.663 34.1513 258.951 34.6787 259.228L43.3445 263.796C43.6162 263.939 43.6956 264.291 43.5158 264.54C43.1 265.116 42.7005 265.705 42.3182 266.305Z"
        className={styles.svgElem25}
      ></path>
      <path
        d="M47.2342 260.16C47.0173 260.378 46.6566 260.357 46.4714 260.111L40.5683 252.285C40.2092 251.809 40.8349 251.217 41.2903 251.602L48.7739 257.928C49.0083 258.127 49.0103 258.487 48.7816 258.692C48.2516 259.166 47.7356 259.656 47.2342 260.16Z"
        className={styles.svgElem26}
      ></path>
      <path
        d="M53.3497 255.209C53.091 255.376 52.7431 255.277 52.6149 254.998L48.5321 246.089C48.2837 245.546 49.022 245.103 49.384 245.577L55.3301 253.361C55.5164 253.605 55.441 253.957 55.1738 254.108C54.5543 254.457 53.946 254.825 53.3497 255.209Z"
        className={styles.svgElem27}
      ></path>
      <path
        d="M60.3847 251.69C60.0964 251.797 59.7781 251.626 59.713 251.325L57.6395 241.752C57.5132 241.169 58.3296 240.894 58.5814 241.435L62.7158 250.313C62.8455 250.592 62.6957 250.92 62.4019 251.009C61.7208 251.217 61.0482 251.444 60.3847 251.69Z"
        className={styles.svgElem28}
      ></path>
      <path
        d="M68.0113 249.778C67.7071 249.82 67.4337 249.585 67.4346 249.278L67.4645 239.477C67.4663 238.88 68.3227 238.787 68.4525 239.369L70.5862 248.937C70.6531 249.237 70.4359 249.526 70.1295 249.55C69.4175 249.606 68.7112 249.682 68.0113 249.778Z"
        className={styles.svgElem29}
      ></path>
      <path
        d="M75.8712 14.55C75.5648 14.526 75.3476 14.2374 75.4145 13.9374L77.5482 4.36934C77.678 3.78728 78.5343 3.88029 78.5362 4.47664L78.5661 14.2777C78.567 14.5848 78.2935 14.8199 77.9893 14.7781C77.2894 14.6819 76.5832 14.6057 75.8712 14.55Z"
        className={styles.svgElem30}
      ></path>
      <path
        d="M83.5988 16.0094C83.305 15.9198 83.1552 15.5916 83.2848 15.3131L87.4193 6.43482C87.671 5.89423 88.4875 6.16892 88.3612 6.75174L86.2876 16.3252C86.2226 16.6257 85.9043 16.7966 85.616 16.6897C84.9525 16.4439 84.2799 16.2169 83.5988 16.0094Z"
        className={styles.svgElem31}
      ></path>
      <path
        d="M90.8269 19.1077C90.5597 18.9569 90.4843 18.6046 90.6705 18.3607L96.6167 10.5767C96.9787 10.1029 97.717 10.5464 97.4686 11.0885L93.3858 19.9976C93.2576 20.2774 92.9097 20.3758 92.651 20.2091C92.0547 19.8248 91.4464 19.4574 90.8269 19.1077Z"
        className={styles.svgElem32}
      ></path>
      <path
        d="M97.2191 23.6916C96.9904 23.4869 96.9924 23.1265 97.2268 22.9284L104.71 16.6017C105.166 16.2168 105.791 16.8086 105.432 17.2846L99.5293 25.111C99.3441 25.3566 98.9834 25.3781 98.7665 25.16C98.2652 24.6557 97.7491 24.166 97.2191 23.6916Z"
        className={styles.svgElem33}
      ></path>
      <path
        d="M102.485 29.5398C102.305 29.2908 102.384 28.9388 102.656 28.7956L111.322 24.2285C111.849 23.9505 112.333 24.663 111.88 25.0507L104.438 31.421C104.204 31.6209 103.848 31.5646 103.682 31.3053C103.3 30.7046 102.901 30.1159 102.485 29.5398Z"
        className={styles.svgElem34}
      ></path>
      <path
        d="M106.376 36.3839C106.254 36.1019 106.408 35.7753 106.704 35.6939L116.142 33.1006C116.717 32.9427 117.036 33.7425 116.51 34.0237L107.878 38.6408C107.607 38.7858 107.27 38.6539 107.165 38.365C106.921 37.6952 106.658 37.0346 106.376 36.3839Z"
        className={styles.svgElem35}
      ></path>
      <path
        d="M108.699 43.907C108.64 43.6056 108.86 43.3199 109.167 43.3042L118.944 42.8033C119.54 42.7728 119.679 43.6225 119.105 43.784L109.678 46.4365C109.381 46.5198 109.081 46.3184 109.041 46.0135C108.947 45.3047 108.833 44.6023 108.699 43.907Z"
        className={styles.svgElem36}
      ></path>
      <path
        d="M109.348 51.7546C109.355 51.4473 109.632 51.215 109.935 51.2658L119.598 52.8826C120.186 52.981 120.139 53.8408 119.544 53.8749L109.765 54.4359C109.458 54.4535 109.209 54.1933 109.234 53.8873C109.292 53.1819 109.33 52.4708 109.348 51.7546Z"
        className={styles.svgElem37}
      ></path>
      <path
        d="M108.311 59.5624C108.385 59.2636 108.705 59.0959 108.99 59.2108L118.072 62.8668C118.625 63.0895 118.394 63.9191 117.806 63.8243L108.143 62.2682C107.84 62.2194 107.652 61.9114 107.743 61.618C107.952 60.941 108.141 60.2556 108.311 59.5624Z"
        className={styles.svgElem38}
      ></path>
      <path
        d="M105.616 66.96C105.752 66.6844 106.1 66.5898 106.354 66.7633L114.438 72.2888C114.93 72.6252 114.526 73.3858 113.972 73.1665L104.867 69.5656C104.581 69.4526 104.464 69.1112 104.616 68.8441C104.967 68.2271 105.3 67.5989 105.616 66.96Z"
        className={styles.svgElem39}
      ></path>
      <path
        d="M101.39 73.6002C101.582 73.3602 101.943 73.3427 102.153 73.5667L108.867 80.7076C109.275 81.142 108.717 81.798 108.223 81.4646L100.099 75.9848C99.8446 75.8131 99.8037 75.4549 100.009 75.2267C100.485 74.6983 100.945 74.1559 101.39 73.6002Z"
        className={styles.svgElem40}
      ></path>
      <path
        d="M95.8422 79.1806C96.0814 78.987 96.4378 79.0474 96.5954 79.3116L101.618 87.7298C101.924 88.2419 101.238 88.7626 100.827 88.3307L94.0719 81.2329C93.8604 81.0106 93.8972 80.6523 94.1465 80.4735C94.7246 80.0588 95.2901 79.6277 95.8422 79.1806Z"
        className={styles.svgElem41}
      ></path>
      <path
        d="M89.229 83.4423C89.5041 83.3047 89.8392 83.4401 89.9365 83.732L93.0322 93.0273C93.2207 93.593 92.4387 93.9543 92.1301 93.4441L87.0608 85.0646C86.9019 84.802 87.0151 84.4597 87.2973 84.3388C87.9513 84.0584 88.5954 83.7594 89.229 83.4423Z"
        className={styles.svgElem42}
      ></path>
      <path
        d="M81.8544 86.1745C82.1525 86.0999 82.45 86.3041 82.4823 86.6096L83.5103 96.3527C83.5728 96.9457 82.7315 97.1306 82.5396 96.566L79.3869 87.2892C79.288 86.9982 79.4727 86.6879 79.7747 86.6309C80.4753 86.4987 81.1687 86.3464 81.8544 86.1745Z"
        className={styles.svgElem43}
      ></path>
      <path
        d="M74.0662 87.2465C74.3731 87.2376 74.6197 87.5009 74.5856 87.8061L73.4973 97.5508C73.4311 98.1435 72.5696 98.1435 72.5034 97.5508L71.4151 87.8061C71.381 87.5009 71.6275 87.2376 71.9345 87.2465C72.2886 87.2567 72.6439 87.2618 73.0004 87.2618C73.3568 87.2618 73.7121 87.2567 74.0662 87.2465Z"
        className={styles.svgElem44}
      ></path>
      <path
        d="M66.2259 86.6309C66.528 86.6879 66.7127 86.9982 66.6138 87.2892L63.4611 96.566C63.2692 97.1306 62.4279 96.9457 62.4904 96.3527L63.5184 86.6096C63.5507 86.3041 63.8482 86.0999 64.1463 86.1745C64.832 86.3464 65.5254 86.4987 66.2259 86.6309Z"
        className={styles.svgElem45}
      ></path>
      <path
        d="M58.7034 84.3388C58.9855 84.4597 59.0987 84.802 58.9399 85.0646L53.8706 93.4441C53.562 93.9543 52.78 93.593 52.9684 93.0273L56.0642 83.732C56.1614 83.4401 56.4966 83.3047 56.7717 83.4423C57.4053 83.7593 58.0494 84.0584 58.7034 84.3388Z"
        className={styles.svgElem46}
      ></path>
      <path
        d="M51.8542 80.4734C52.1035 80.6523 52.1403 81.0106 51.9288 81.2329L45.1741 88.3307C44.763 88.7626 44.077 88.2419 44.3825 87.7298L49.4053 79.3115C49.5629 79.0473 49.9193 78.987 50.1585 79.1806C50.7106 79.6276 51.2761 80.0588 51.8542 80.4734Z"
        className={styles.svgElem47}
      ></path>
      <path
        d="M45.9916 75.2267C46.197 75.4549 46.1561 75.8131 45.9016 75.9848L37.7781 81.4646C37.2838 81.798 36.7258 81.142 37.1342 80.7076L43.8473 73.5667C44.0578 73.3427 44.4186 73.3601 44.6106 73.6002C45.0553 74.1559 45.5158 74.6983 45.9916 75.2267Z"
        className={styles.svgElem48}
      ></path>
      <path
        d="M41.3847 68.8441C41.5365 69.1112 41.4196 69.4526 41.1339 69.5656L32.0286 73.1665C31.4742 73.3858 31.0704 72.6252 31.5626 72.2888L39.6469 66.7633C39.9006 66.5898 40.2491 66.6844 40.3852 66.96C40.7004 67.5989 41.0338 68.2271 41.3847 68.8441Z"
        className={styles.svgElem49}
      ></path>
      <path
        d="M38.258 61.6179C38.3486 61.9114 38.1609 62.2194 37.8577 62.2682L28.195 63.8243C27.6064 63.9191 27.3757 63.0895 27.9288 62.8668L37.0105 59.2108C37.2959 59.0959 37.6161 59.2636 37.6893 59.5624C37.8593 60.2556 38.0491 60.941 38.258 61.6179Z"
        className={styles.svgElem50}
      ></path>
      <path
        d="M36.7666 53.8873C36.7919 54.1933 36.5423 54.4535 36.2358 54.4359L26.4568 53.8749C25.8616 53.8408 25.8149 52.981 26.4029 52.8826L36.0658 51.2658C36.369 51.215 36.6455 51.4473 36.653 51.7546C36.6704 52.4708 36.7085 53.1819 36.7666 53.8873Z"
        className={styles.svgElem51}
      ></path>
      <path
        d="M36.9599 46.0135C36.9195 46.3185 36.6193 46.5198 36.3231 46.4365L26.8955 43.784C26.3216 43.6225 26.4611 42.7728 27.0565 42.8033L36.8337 43.3042C37.1403 43.3199 37.3602 43.6056 37.3021 43.907C37.1681 44.6023 37.0538 45.3047 36.9599 46.0135Z"
        className={styles.svgElem52}
      ></path>
      <path
        d="M38.8355 38.365C38.7302 38.6539 38.3939 38.7858 38.1227 38.6408L29.4906 34.0237C28.9649 33.7425 29.284 32.9427 29.8589 33.1006L39.297 35.6939C39.5932 35.7753 39.7464 36.102 39.6244 36.3839C39.3428 37.0346 39.0796 37.6952 38.8355 38.365Z"
        className={styles.svgElem53}
      ></path>
      <path
        d="M42.3182 31.3053C42.1532 31.5646 41.7965 31.6209 41.563 31.421L34.1205 25.0507C33.6675 24.663 34.1513 23.9505 34.6787 24.2285L43.3445 28.7956C43.6162 28.9388 43.6956 29.2908 43.5158 29.5398C43.1 30.1159 42.7005 30.7046 42.3182 31.3053Z"
        className={styles.svgElem54}
      ></path>
      <path
        d="M47.2342 25.16C47.0173 25.3781 46.6566 25.3566 46.4714 25.1111L40.5683 17.2847C40.2092 16.8086 40.8349 16.2168 41.2903 16.6017L48.7739 22.9284C49.0083 23.1265 49.0103 23.4869 48.7816 23.6916C48.2516 24.166 47.7356 24.6557 47.2342 25.16Z"
        className={styles.svgElem55}
      ></path>
      <path
        d="M53.3497 20.2092C53.091 20.3759 52.7431 20.2774 52.6149 19.9977L48.5321 11.0885C48.2837 10.5464 49.022 10.1028 49.384 10.5767L55.3301 18.3607C55.5164 18.6046 55.441 18.9569 55.1738 19.1077C54.5543 19.4574 53.946 19.8248 53.3497 20.2092Z"
        className={styles.svgElem56}
      ></path>
      <path
        d="M60.3847 16.6897C60.0964 16.7966 59.7781 16.6257 59.713 16.3252L57.6395 6.75175C57.5132 6.16893 58.3296 5.89423 58.5814 6.43483L62.7158 15.3132C62.8455 15.5916 62.6957 15.9198 62.4019 16.0094C61.7208 16.2169 61.0482 16.4439 60.3847 16.6897Z"
        className={styles.svgElem57}
      ></path>
      <path
        d="M68.0113 14.7781C67.7071 14.8199 67.4337 14.5848 67.4346 14.2777L67.4645 4.47664C67.4663 3.88029 68.3227 3.78728 68.4525 4.36934L70.5862 13.9374C70.6531 14.2375 70.4359 14.526 70.1295 14.55C69.4175 14.6057 68.7112 14.6819 68.0113 14.7781Z"
        className={styles.svgElem58}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116.03 137.829C116.259 137.444 116.841 137.531 116.946 137.967L119.514 148.588C119.637 149.098 120.363 149.098 120.486 148.588L123.054 137.967C123.159 137.531 123.741 137.444 123.97 137.829L129.554 147.221C129.823 147.672 130.516 147.458 130.483 146.935L129.807 136.029C129.779 135.581 130.309 135.326 130.641 135.627L138.746 142.956C139.135 143.307 139.734 142.899 139.549 142.408L135.688 132.186C135.529 131.767 135.96 131.367 136.367 131.556L146.272 136.17C146.747 136.392 147.199 135.825 146.878 135.41L140.175 126.781C139.9 126.427 140.194 125.917 140.638 125.979L151.463 127.468C151.983 127.54 152.248 126.865 151.818 126.563L142.87 120.293C142.503 120.035 142.633 119.462 143.076 119.39L153.859 117.623C154.377 117.538 154.431 116.814 153.931 116.653L143.532 113.299C143.106 113.161 143.062 112.575 143.463 112.375L153.246 107.508C153.716 107.275 153.554 106.567 153.03 106.561L142.104 106.42C141.656 106.414 141.441 105.867 141.766 105.558L149.679 98.0238C150.059 97.662 149.697 97.0338 149.193 97.182L138.711 100.268C138.281 100.395 137.915 99.9354 138.134 99.5443L143.475 90.012C143.732 89.5542 143.2 89.0609 142.763 89.3508L133.656 95.3897C133.283 95.6375 132.797 95.3063 132.891 94.868L135.186 84.1848C135.296 83.6718 134.642 83.3571 134.31 83.763L127.388 92.2178C127.104 92.5646 126.542 92.3914 126.503 91.9448L125.547 81.0599C125.501 80.5372 124.783 80.4291 124.585 80.915L120.463 91.0345C120.294 91.4496 119.706 91.4496 119.537 91.0345L115.415 80.915C115.217 80.4291 114.499 80.5372 114.454 81.0599L113.497 91.9448C113.458 92.3914 112.896 92.5646 112.612 92.2178L105.69 83.763C105.358 83.3571 104.704 83.6718 104.814 84.1848L107.109 94.868C107.203 95.3063 106.717 95.6375 106.344 95.3897L97.2372 89.3508C96.8 89.0609 96.2682 89.5542 96.5247 90.012L101.866 99.5443C102.085 99.9354 101.719 100.395 101.289 100.268L90.8068 97.182C90.3035 97.0338 89.9408 97.662 90.3208 98.0238L98.2346 105.558C98.5593 105.867 98.3445 106.414 97.8963 106.42L86.9703 106.561C86.4457 106.567 86.2843 107.275 86.7541 107.508L96.5371 112.375C96.9385 112.575 96.8945 113.161 96.4679 113.299L86.0687 116.653C85.5694 116.814 85.6236 117.538 86.1413 117.623L96.9243 119.39C97.3667 119.462 97.4975 120.035 97.1304 120.293L88.182 126.563C87.7524 126.865 88.0174 127.54 88.5371 127.468L99.362 125.979C99.8061 125.917 100.1 126.427 99.8251 126.781L93.1226 135.41C92.8007 135.825 93.253 136.392 93.7286 136.17L103.633 131.556C104.04 131.367 104.471 131.767 104.312 132.186L100.451 142.408C100.266 142.899 100.865 143.307 101.254 142.956L109.359 135.627C109.692 135.326 110.221 135.581 110.193 136.029L109.517 146.935C109.484 147.458 110.178 147.672 110.446 147.221L116.03 137.829ZM120 94.5979C108.954 94.5979 100 103.552 100 114.598C100 125.644 108.954 134.598 120 134.598C131.046 134.598 140 125.644 140 114.598C140 103.552 131.046 94.5979 120 94.5979Z"
        fill="#FFCD83"
        className={styles.svgElem59}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.6787 192.251C31.9995 191.712 32.8133 191.834 32.9608 192.444L35.2191 201.784C35.3917 202.498 36.4072 202.498 36.5799 201.784L38.8382 192.444C38.9857 191.834 39.7995 191.712 40.1202 192.251L45.0311 200.51C45.4065 201.142 46.3769 200.842 46.3314 200.109L45.7365 190.519C45.6976 189.892 46.4391 189.535 46.9046 189.956L54.0317 196.401C54.5766 196.893 55.4156 196.321 55.1561 195.634L51.7608 186.645C51.539 186.058 52.1423 185.498 52.7112 185.764L61.4212 189.821C62.0871 190.131 62.7202 189.337 62.2697 188.757L56.3757 181.168C55.9907 180.673 56.4022 179.96 57.024 180.046L66.543 181.356C67.2707 181.456 67.6417 180.51 67.0401 180.089L59.1712 174.574C58.6572 174.214 58.8404 173.412 59.4597 173.31L68.942 171.756C69.6668 171.638 69.7427 170.625 69.0436 170.399L59.8989 167.449C59.3016 167.257 59.2401 166.436 59.802 166.157L68.405 161.877C69.0626 161.549 68.8366 160.559 68.1021 160.55L58.4942 160.427C57.8666 160.418 57.566 159.652 58.0205 159.22L64.9797 152.594C65.5117 152.088 65.0039 151.208 64.2993 151.416L55.0818 154.13C54.4798 154.307 53.9667 153.664 54.2734 153.116L58.9705 144.734C59.3296 144.093 58.5852 143.402 57.973 143.808L49.965 149.118C49.442 149.465 48.762 149.002 48.8938 148.388L50.9114 138.993C51.0657 138.275 50.1507 137.835 49.6854 138.403L43.5984 145.838C43.2009 146.324 42.4144 146.081 42.3595 145.456L41.5184 135.884C41.4541 135.152 40.4499 135.001 40.1728 135.681L36.5478 144.58C36.311 145.161 35.488 145.161 35.2512 144.58L31.6262 135.681C31.349 135.001 30.3449 135.152 30.2806 135.884L29.4395 145.456C29.3846 146.081 28.5981 146.324 28.2005 145.838L22.1136 138.403C21.6483 137.835 20.7333 138.275 20.8876 138.993L22.9052 148.388C23.037 149.002 22.357 149.465 21.834 149.118L13.826 143.808C13.2138 143.402 12.4694 144.093 12.8285 144.734L17.5255 153.116C17.8323 153.664 17.3192 154.307 16.7172 154.13L7.49969 151.416C6.79505 151.208 6.28729 152.088 6.81929 152.594L13.7785 159.22C14.233 159.652 13.9323 160.418 13.3048 160.427L3.69683 160.55C2.96234 160.559 2.73636 161.549 3.39403 161.877L11.9969 166.157C12.5588 166.436 12.4973 167.257 11.9001 167.449L2.75532 170.399C2.05624 170.625 2.13213 171.638 2.85701 171.756L12.3393 173.31C12.9586 173.412 13.1417 174.214 12.6278 174.574L4.75882 180.089C4.15727 180.51 4.52828 181.456 5.25597 181.356L14.775 180.046C15.3968 179.96 15.8083 180.673 15.4233 181.168L9.52933 188.757C9.07876 189.337 9.71191 190.131 10.3778 189.821L19.0878 185.764C19.6567 185.498 20.26 186.058 20.0382 186.645L16.6429 195.634C16.3834 196.321 17.2224 196.893 17.7673 196.401L24.8943 189.956C25.3598 189.535 26.1013 189.892 26.0625 190.519L25.4676 200.109C25.4221 200.842 26.3925 201.142 26.7679 200.51L31.6787 192.251ZM35.8995 148.598C24.8538 148.598 15.8995 157.552 15.8995 168.598C15.8995 179.644 24.8538 188.598 35.8995 188.598C46.9452 188.598 55.8995 179.644 55.8995 168.598C55.8995 157.552 46.9452 148.598 35.8995 148.598Z"
        fill="#FFCD83"
        className={styles.svgElem60}
      ></path>
      <path
        d="M86.5739 168.638C86.0448 168.601 85.5902 169.046 85.6574 169.572L86.7064 177.786C86.8254 178.718 88.1746 178.718 88.2936 177.786L89.3426 169.572C89.4098 169.046 88.9552 168.601 88.4261 168.638C88.1201 168.659 87.8113 168.669 87.5 168.669C87.1887 168.669 86.8799 168.659 86.5739 168.638Z"
        fill="#C4C4C4"
        className={styles.svgElem61}
      ></path>
      <path
        d="M84.0678 169.275C84.3198 168.808 84.056 168.23 83.5497 168.073C82.9563 167.889 82.3806 167.664 81.8257 167.402C81.3446 167.175 80.7577 167.426 80.6307 167.943L78.6543 175.983C78.4301 176.894 79.6886 177.38 80.135 176.554L84.0678 169.275Z"
        fill="#C4C4C4"
        className={styles.svgElem62}
      ></path>
      <path
        d="M79.2593 167.081C79.6619 166.737 79.6257 166.105 79.2117 165.775C78.7261 165.389 78.2678 164.969 77.8404 164.52C77.4737 164.134 76.836 164.157 76.5314 164.593L71.7903 171.382C71.2528 172.151 72.2511 173.058 72.9653 172.449L79.2593 167.081Z"
        fill="#C4C4C4"
        className={styles.svgElem63}
      ></path>
      <path
        d="M75.5584 163.294C76.0588 163.119 76.2537 162.515 75.9854 162.058C75.6724 161.525 75.395 160.968 75.1566 160.39C74.9536 159.899 74.3508 159.689 73.9093 159.986L67.043 164.599C66.2641 165.122 66.8668 166.327 67.7527 166.018L75.5584 163.294Z"
        fill="#C4C4C4"
        className={styles.svgElem64}
      ></path>
      <path
        d="M73.4699 158.419C73.9998 158.437 74.4007 157.944 74.3161 157.421C74.2022 156.716 74.143 155.993 74.143 155.255C74.143 154.878 73.7975 154.585 73.429 154.668L65.0605 156.547C64.1452 156.752 64.27 158.094 65.2075 158.127L73.4699 158.419Z"
        fill="#C4C4C4"
        className={styles.svgElem65}
      ></path>
      <path
        d="M73.2766 153.114C73.7652 153.324 74.319 153.007 74.4278 152.487C74.5561 151.872 74.7263 151.274 74.9352 150.693C75.1148 150.195 74.8118 149.636 74.2875 149.557L66.1154 148.319C65.1878 148.179 64.8177 149.474 65.6795 149.845L73.2766 153.114Z"
        fill="#C4C4C4"
        className={styles.svgElem66}
      ></path>
      <path
        d="M75.0079 148.099C75.3873 148.472 76.0181 148.377 76.308 147.931C76.6473 147.409 77.0219 146.912 77.4283 146.444C77.7754 146.044 77.6948 145.415 77.2356 145.152L70.0625 141.034C69.2486 140.567 68.4342 141.641 69.1036 142.299L75.0079 148.099Z"
        fill="#C4C4C4"
        className={styles.svgElem67}
      ></path>
      <path
        d="M78.4267 144.053C78.6462 144.537 79.2695 144.676 79.7006 144.364C80.2005 144.002 80.7264 143.675 81.2748 143.384C81.7425 143.136 81.8947 142.52 81.5619 142.109L76.3614 135.676C75.7712 134.946 74.6232 135.654 75.0105 136.509L78.4267 144.053Z"
        fill="#C4C4C4"
        className={styles.svgElem68}
      ></path>
      <path
        d="M83.0691 141.518C83.0993 142.048 83.6291 142.402 84.1433 142.268C84.7345 142.115 85.3416 142 85.9616 141.929C86.4886 141.868 86.8544 141.348 86.692 140.843L84.1577 132.962C83.8703 132.068 82.544 132.315 82.5975 133.252L83.0691 141.518Z"
        fill="#C4C4C4"
        className={styles.svgElem69}
      ></path>
      <path
        d="M88.308 140.843C88.1456 141.348 88.5114 141.868 89.0384 141.929C89.6584 142.001 90.2655 142.115 90.8567 142.268C91.3709 142.402 91.9007 142.048 91.9309 141.518L92.4026 133.252C92.456 132.315 91.1297 132.068 90.8423 132.962L88.308 140.843Z"
        fill="#C4C4C4"
        className={styles.svgElem70}
      ></path>
      <path
        d="M93.4381 142.109C93.1053 142.52 93.2575 143.136 93.7252 143.384C94.2736 143.675 94.7994 144.003 95.2994 144.364C95.7305 144.676 96.3537 144.537 96.5733 144.053L99.9895 136.509C100.377 135.654 99.2288 134.946 98.6386 135.676L93.4381 142.109Z"
        fill="#C4C4C4"
        className={styles.svgElem71}
      ></path>
      <path
        d="M97.7643 145.152C97.3052 145.415 97.2246 146.044 97.5716 146.444C97.9781 146.912 98.3526 147.409 98.692 147.931C98.9818 148.377 99.6127 148.472 99.992 148.099L105.896 142.299C106.566 141.641 105.751 140.567 104.937 141.034L97.7643 145.152Z"
        fill="#C4C4C4"
        className={styles.svgElem72}
      ></path>
      <path
        d="M100.712 149.557C100.188 149.636 99.8851 150.195 100.065 150.693C100.274 151.274 100.444 151.872 100.572 152.487C100.681 153.007 101.235 153.324 101.723 153.114L109.321 149.845C110.182 149.474 109.812 148.179 108.885 148.319L100.712 149.557Z"
        fill="#C4C4C4"
        className={styles.svgElem73}
      ></path>
      <path
        d="M101.571 154.668C101.202 154.585 100.857 154.878 100.857 155.255C100.857 155.993 100.798 156.716 100.684 157.421C100.599 157.944 101 158.437 101.53 158.419L109.792 158.127C110.73 158.094 110.855 156.752 109.939 156.547L101.571 154.668Z"
        fill="#C4C4C4"
        className={styles.svgElem74}
      ></path>
      <path
        d="M101.091 159.986C100.649 159.689 100.046 159.899 99.8433 160.39C99.6049 160.968 99.3276 161.525 99.0145 162.058C98.7462 162.515 98.9412 163.119 99.4415 163.294L107.247 166.018C108.133 166.327 108.736 165.122 107.957 164.599L101.091 159.986Z"
        fill="#C4C4C4"
        className={styles.svgElem75}
      ></path>
      <path
        d="M97.1596 164.52C97.5262 164.134 98.164 164.157 98.4686 164.593L103.21 171.382C103.747 172.151 102.749 173.058 102.035 172.449L95.7406 167.081C95.3381 166.737 95.3743 166.105 95.7883 165.775C96.2739 165.389 96.7321 164.969 97.1596 164.52Z"
        fill="#C4C4C4"
        className={styles.svgElem76}
      ></path>
      <path
        d="M93.1743 167.402C93.6554 167.175 94.2423 167.426 94.3693 167.943L96.3458 175.983C96.5699 176.894 95.3114 177.38 94.865 176.554L90.9322 169.275C90.6802 168.808 90.944 168.23 91.4503 168.073C92.0437 167.889 92.6194 167.664 93.1743 167.402Z"
        fill="#C4C4C4"
        className={styles.svgElem77}
      ></path>
      <path
        d="M63.179 229.605C62.8491 229.572 62.5652 229.85 62.6072 230.179L64.004 241.116C64.0784 241.699 64.9216 241.699 64.996 241.116L66.3928 230.179C66.4348 229.85 66.1509 229.572 65.821 229.605C65.3864 229.648 64.9457 229.669 64.5 229.669C64.0542 229.669 63.6135 229.648 63.179 229.605Z"
        fill="#C4C4C4"
        className={styles.svgElem78}
      ></path>
      <path
        d="M61.256 229.926C61.4135 229.635 61.2489 229.274 60.9297 229.185C60.0713 228.946 59.2477 228.624 58.4681 228.227C58.1718 228.076 57.8051 228.233 57.7258 228.556L55.0941 239.261C54.954 239.831 55.7406 240.135 56.0195 239.618L61.256 229.926Z"
        fill="#C4C4C4"
        className={styles.svgElem79}
      ></path>
      <path
        d="M56.5597 227.825C56.8113 227.61 56.7888 227.215 56.5241 227.016C55.8153 226.486 55.1607 225.886 54.5702 225.227C54.3483 224.98 53.9498 224.994 53.7594 225.267L47.4505 234.3C47.1146 234.781 47.7385 235.348 48.1848 234.967L56.5597 227.825Z"
        fill="#C4C4C4"
        className={styles.svgElem80}
      ></path>
      <path
        d="M52.9321 224.163C53.2448 224.054 53.3668 223.677 53.1908 223.396C52.7229 222.65 52.3262 221.855 52.0101 221.02C51.8925 220.709 51.5158 220.578 51.2398 220.764L42.1063 226.9C41.6195 227.227 41.9962 227.98 42.5499 227.787L52.9321 224.163Z"
        fill="#C4C4C4"
        className={styles.svgElem81}
      ></path>
      <path
        d="M50.8658 219.433C51.197 219.444 51.4476 219.136 51.3851 218.811C51.2262 217.984 51.143 217.129 51.143 216.255C51.143 216.225 51.1431 216.194 51.1433 216.164C51.1455 215.832 50.8421 215.575 50.5185 215.648L39.7878 218.057C39.2158 218.185 39.2938 219.024 39.8797 219.045L50.8658 219.433Z"
        fill="#C4C4C4"
        className={styles.svgElem82}
      ></path>
      <path
        d="M50.6424 214.271C50.9477 214.403 51.2939 214.205 51.3522 213.878C51.5097 212.993 51.7537 212.138 52.0749 211.323C52.1963 211.015 52.0068 210.666 51.6792 210.616L40.8111 208.97C40.2314 208.883 40 209.692 40.5386 209.924L50.6424 214.271Z"
        fill="#C4C4C4"
        className={styles.svgElem83}
      ></path>
      <path
        d="M52.2919 209.378C52.529 209.611 52.9231 209.552 53.096 209.268C53.5581 208.509 54.0933 207.799 54.6917 207.15C54.9158 206.906 54.8653 206.513 54.5783 206.348L45.0362 200.871C44.5275 200.579 44.0185 201.25 44.4369 201.662L52.2919 209.378Z"
        fill="#C4C4C4"
        className={styles.svgElem84}
      ></path>
      <path
        d="M55.5911 205.416C55.7283 205.719 56.1177 205.805 56.3812 205.603C57.0787 205.066 57.8303 204.596 58.6266 204.204C58.9234 204.058 59.0183 203.673 58.8103 203.416L51.888 194.854C51.5191 194.397 50.8017 194.84 51.0437 195.374L55.5911 205.416Z"
        fill="#C4C4C4"
        className={styles.svgElem85}
      ></path>
      <path
        d="M60.0917 202.914C60.1106 203.246 60.4415 203.467 60.7602 203.374C61.5947 203.13 62.4629 202.966 63.3561 202.89C63.6865 202.861 63.9149 202.536 63.8134 202.221L60.4389 191.726C60.2592 191.167 59.4302 191.322 59.4637 191.908L60.0917 202.914Z"
        fill="#C4C4C4"
        className={styles.svgElem86}
      ></path>
      <path
        d="M65.1866 202.221C65.0851 202.536 65.3135 202.861 65.6439 202.89C66.5371 202.966 67.4053 203.13 68.2398 203.374C68.5585 203.467 68.8894 203.246 68.9083 202.914L69.5363 191.908C69.5698 191.322 68.7408 191.167 68.5611 191.726L65.1866 202.221Z"
        fill="#C4C4C4"
        className={styles.svgElem87}
      ></path>
      <path
        d="M70.1897 203.416C69.9817 203.673 70.0766 204.058 70.3734 204.204C71.1697 204.596 71.9213 205.066 72.6187 205.603C72.8823 205.806 73.2717 205.719 73.4089 205.416L77.9563 195.374C78.1983 194.84 77.4809 194.397 77.112 194.854L70.1897 203.416Z"
        fill="#C4C4C4"
        className={styles.svgElem88}
      ></path>
      <path
        d="M74.4216 206.348C74.1347 206.513 74.0841 206.906 74.3083 207.15C74.9067 207.799 75.4418 208.509 75.904 209.268C76.0768 209.552 76.471 209.611 76.7081 209.378L84.5631 201.662C84.9815 201.25 84.4725 200.579 83.9638 200.871L74.4216 206.348Z"
        fill="#C4C4C4"
        className={styles.svgElem89}
      ></path>
      <path
        d="M77.3207 210.616C76.9931 210.666 76.8036 211.015 76.925 211.323C77.2462 212.138 77.4902 212.993 77.6477 213.878C77.706 214.205 78.0522 214.403 78.3575 214.271L88.4614 209.924C89 209.692 88.7687 208.883 88.1889 208.97L77.3207 210.616Z"
        fill="#C4C4C4"
        className={styles.svgElem90}
      ></path>
      <path
        d="M78.4814 215.648C78.1578 215.575 77.8544 215.832 77.8566 216.164C77.8568 216.194 77.8569 216.225 77.8569 216.255C77.8569 217.129 77.7737 217.984 77.6148 218.811C77.5523 219.136 77.803 219.444 78.1341 219.433L89.1203 219.045C89.7062 219.024 89.7842 218.185 89.2122 218.057L78.4814 215.648Z"
        fill="#C4C4C4"
        className={styles.svgElem91}
      ></path>
      <path
        d="M77.7601 220.764C77.4841 220.578 77.1075 220.709 76.9898 221.02C76.6737 221.855 76.277 222.65 75.8091 223.396C75.6331 223.677 75.7551 224.054 76.0678 224.163L86.4501 227.787C87.0038 227.98 87.3805 227.227 86.8937 226.9L77.7601 220.764Z"
        fill="#C4C4C4"
        className={styles.svgElem92}
      ></path>
      <path
        d="M74.4298 225.227C74.6517 224.98 75.0502 224.994 75.2405 225.266L81.5496 234.3C81.8855 234.781 81.2615 235.348 80.8152 234.967L72.4403 227.825C72.1887 227.61 72.2111 227.215 72.4758 227.016C73.1846 226.486 73.8392 225.886 74.4298 225.227Z"
        fill="#C4C4C4"
        className={styles.svgElem93}
      ></path>
      <path
        d="M70.5319 228.227C70.8282 228.076 71.1949 228.233 71.2742 228.556L73.9059 239.261C74.046 239.831 73.2594 240.135 72.9805 239.618L67.744 229.926C67.5864 229.635 67.7511 229.274 68.0703 229.185C68.9286 228.946 69.7523 228.624 70.5319 228.227Z"
        fill="#C4C4C4"
        className={styles.svgElem94}
      ></path>
    </svg>
  );
};