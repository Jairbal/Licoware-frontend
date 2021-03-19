import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "../../componentsStyles/ui/Calendar.css";
import { Wrapper } from "../../componentsStyles/ui/Credito";

export const Credito = ({ onChange, minDate }) => {
  const [state, setSate] = useState({
    credito: false,
    fechaMax: "",
  });

  const { credito, fechaMax } = state;

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setSate({
      credito: value,
    });
    onChange({
      target: {
        name: "credito",
        value,
      },
    });
  };

  const handleChangeDate = (date) => {
    onChange({
      target: {
        name: "fechaMaxPago",
        value: date,
      },
    });
  };

  return (
    <Wrapper>
      <label>Crédito</label>
      <label className="checkbox bounce">
        <input
          type="checkbox"
          name="credito"
          value={credito}
          onChange={handleChange}
        />
      </label>
      {credito && (
        <DatePicker
          label="Fecha maxima de pago"
          initialValue={fechaMax}
          onChange={handleChangeDate}
          minDate={minDate}
        />
      )}
    </Wrapper>
  );
};
