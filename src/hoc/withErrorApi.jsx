import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = (Component) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Component {...props} setErrorApi={setErrorApi} />
        )}
      </>
    );
  };
};
