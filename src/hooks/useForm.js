import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const setNewValues = (value) => {
    setValues(value);
  }

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }, type = "text") => {
    if (type === "text") {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    } else if (type === "file") {
      setValues({
        ...values,
        [target.name]: target.files[0],
      });
    }
  };

  return [values, handleInputChange, reset, setNewValues];
};
