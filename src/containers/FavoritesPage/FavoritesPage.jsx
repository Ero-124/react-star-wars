import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const [peoples, setPeoples] = useState([]);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeoples(res);
    }
  }, []);

  return (
    <>
    <h1 className="header__text" style={{textAlign: 'center'}}>Favorites Page</h1>
    {peoples.length 
      ? <PeopleList peoples={peoples} />
      : <h2 className={styles.comment}>No data</h2>
    }
      
    </>
  );
};

export default FavoritesPage;
