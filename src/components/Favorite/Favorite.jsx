import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import favoriteImg from "./img/bookmark.svg";
import styles from "./Favorite.module.css";

const Favorite = () => {
  const favorites = useSelector((state) => state.favoriteReducer);
  const lengthFavorites = Object.keys(favorites).length;
  const resultLength = lengthFavorites.toString().length > 2 ? '...' : lengthFavorites
 
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{resultLength}</span>
        <img className={styles.icon} src={favoriteImg} alt="favorite icon" />
      </Link>
    </div>
  );
};

export default Favorite;
