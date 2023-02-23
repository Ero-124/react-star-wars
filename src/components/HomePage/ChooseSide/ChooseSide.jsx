import React from "react";

import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../../context/ThemeProvider";

import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";
import imgLightSide from "./img/light-side.jpg";

import styles from "./ChooseSide.module.css";
import ChooseSideItem from "./ChooseSideItem/ChooseSideItem";

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item__neitral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((item) => {
        return (
          <ChooseSideItem
            key={item.theme}
            theme={item.theme}
            text={item.text}
            img={item.img}
            classes={item.classes}
          />
        );
      })}
    </div>
  );
};

export default ChooseSide;
