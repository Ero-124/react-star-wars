import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchPageInfo.module.css";
import { Link } from "react-router-dom";

const SearchPageInfo = ({ peoples }) => {
  return (
    <>
      {peoples.length ? (
        <ul className={styles.list__container}>
          {peoples.map((people) => (
            <li className={styles.list__item} key={people.id}>
              <Link to={`/people/${people.id}`}>
                <img
                  className={styles.person__photo}
                  src={people.img}
                  alt={people.name}
                />
                <p className={styles.person__name}>{people.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>No Results</h2>
      )}
    </>
  );
};

SearchPageInfo.propTypes = {
  peoples: PropTypes.array,
};
export default SearchPageInfo;
