import React, { useState } from "react";
import "./styles.css";

export default function DropDown(props) {
  const { list } = props;
  const [flag, setFlag] = useState(false);
  const [selectValue, setSelectValue] = useState("Select");

  // this function set value of selectValue and also set flag false.
  const onClickHnadler = (evt) => {
    setSelectValue(evt.target.innerHTML);
    setFlag(false);
  };

  // this will show list of dropDownList of elements.
  const dropDownList = list.map((ele, index) => (
    <button
      style={{ display: "block", margin: "auto" }}
      className="select-button"
      onClick={onClickHnadler}
      key={index}
    >
      {ele}
    </button>
  ));

  // this function will set flag true when we enter mouse enters into dropdown area.
  const mouseEnterHandler = () => {
    setFlag(true);
  };

  // this function ser flag false when user leaves dropsown list.
  const mouseLeaveHandler = () => {
    setFlag(false);
  };

  return (
    <div className="App">
      <div style={{ width: "100px" }} onMouseLeave={mouseLeaveHandler}>
        <button className="select-button" onMouseEnter={mouseEnterHandler}>
          {selectValue}
        </button>
        {flag && dropDownList}
      </div>
    </div>
  );
}
