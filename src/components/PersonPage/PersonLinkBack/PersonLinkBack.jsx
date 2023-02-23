import React from "react";
import { useNavigate } from "react-router";
import iconBack from "./img/back.svg";
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.back__container} onClick={() => navigate(-1)}>
      <img className={styles.link__img} src={iconBack} alt="Back" />
      <span className={styles.back}>Go back</span>
    </div>
  );
};

export default PersonLinkBack;
