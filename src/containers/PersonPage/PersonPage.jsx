import React, { useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc/withErrorApi";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import styles from "./PersonPage.module.css";
import UiLoading from "../../components/UI/UiLoading/UiLoading";
const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);
const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const params = useParams();
  const id = params.id;
  const img = getPeopleImage(id);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      if (res) {
        setErrorApi(false);
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);

        res.films.length && setPersonFilms(res.films);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={img}
            personName={personName}
            personId={id}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
