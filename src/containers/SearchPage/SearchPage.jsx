import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc/withErrorApi";
import { API_SEARCH } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";

import styles from "./SearchPage.module.css";
import UiInput from "../../components/UI/UiInput/UiInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [peoples, setPeoples] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return { id, name, img };
      });
      setPeoples(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        type="text"
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />

      <SearchPageInfo peoples={peoples} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
