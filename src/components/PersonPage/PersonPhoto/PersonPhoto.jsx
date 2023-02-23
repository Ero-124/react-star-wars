import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Add to favorite or remove"
          title={personFavorite ? "Remove from favorite" : "Add to favorite"}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  id: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonToFavorite: PropTypes.func,
};

export default PersonPhoto;
