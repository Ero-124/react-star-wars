import React from "react";
import PropTypes from "prop-types";

import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container__list}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.item__title}>{title}</span>&nbsp;:&nbsp;{data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
