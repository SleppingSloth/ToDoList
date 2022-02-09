import { useState } from "react";

import "./employees-add-form.css";

const EmployeesAddForm = ({ addNewEmployees }) => {
  const [personData, setPersonData] = useState({ name: "", salary: "" });

  function onAddEmployees(e) {
    const attrebute = e.target.getAttribute("data-name");
    setPersonData({ ...personData, [attrebute]: e.target.value });
  }

  function addNewPerson(e) {
    e.preventDefault();
    addNewEmployees(personData);
    setPersonData({ name: "", salary: "" });
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          data-name="name"
          onChange={onAddEmployees}
          value={personData.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          data-name="salary"
          onChange={onAddEmployees}
          value={personData.salary}
        />

        <button
          onClick={addNewPerson}
          type="submit"
          className="btn btn-outline-light"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
