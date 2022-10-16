import React from "react";
import { useState } from "react";
import icon from "../../../assets/img/icon.png";

const Form = (props) => {
  const [value, setValue] = useState('');

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const onClearInput = () => {
    setValue('');
  };

  return (
    <div className="form">
      <form onSubmit={props.weatherMethod}>
        <div></div>
        <input
          className="inputText"
          type="text"
          name="city"
          placeholder="city"
          value={value}
          onChange={onChangeInput}
        />

        {value && (
          <img onClick={onClearInput} className="imgClear" src={icon} />
        )}
        <button className="btnSubmit">Submit</button>
        <button className="btnDelete" onClick={props.onDelete}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Form;
