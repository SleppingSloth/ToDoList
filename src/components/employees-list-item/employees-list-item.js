import { useState } from "react";
import "./employees-list-item.css";

const EmployeesListItem = ({ data, deleteEmployees, addIncrease, addRise }) => {
  const { name, salary, increase, rise } = data;

  function onIncrease() {
    addIncrease(data);
  }
  function onRice(){
    addRise(data);
  }
  const increaseClass = increase ? "increase" : "";
  const riseClass = rise ? "like" : "";

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${increaseClass} ${riseClass}`}
    >
      <span
        onClick={onIncrease}
        data-togle="increase"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onRice}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          onClick={() => deleteEmployees(data)}
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
