import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState([
    {
      name: "Sasha",
      salary: 10000,
      id: 1,
      increase: true,
      rise: false,
    },
    {
      name: "Oksana",
      salary: 1020,
      id: 2,
      increase: false,
      rise: true,
    },
    {
      name: "Lilia",
      salary: 100,
      id: 3,
      increase: false,
      rise: false,
    },
  ]);
  //Filter
  function setTermFuncion(term) {
    setTerm(term);
  }
  function setFilterFuncion(filter) {
    setFilter(filter);
  }

  function filterTermEmployees() {
    if (!term) {
      return data;
    }
    return data.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()));
  }

  function filterFilterEmployees(data) {
    switch (filter) {
      case "all": {
        return data;
      }
      case "rise": {
        return data.filter((persone) => persone.rise);
      }
      case "1000": {
        return data.filter((persone) => persone.salary > 1000);
      }
    }
  }

  //Increase Rise
  function addIncrease(persone) {
    persone.increase = !persone.increase;
    setData([...data]);
  }
  function addRise(persone) {
    persone.rise = !persone.rise;
    setData([...data]);
  }
  //Add new person
  function addNewEmployees(person) {
    person.id = person.name + person.salary;
    person.increase = false;
    setData([...data, person]);
  }
  //delete persone
  function deleteEmployees(person) {
    setData(data.filter((p) => p !== person));
  }

  const filterData = filterFilterEmployees(filterTermEmployees());

  return (
    <div className="app">
      <AppInfo data={data} />

      <div className="search-panel">
        <SearchPanel setTermFuncion={setTermFuncion} />
        <AppFilter setFilterFuncion={setFilterFuncion} filter={filter} />
      </div>

      <EmployeesList
        data={filterData}
        deleteEmployees={deleteEmployees}
        addIncrease={addIncrease}
        addRise={addRise}
      />
      <EmployeesAddForm addNewEmployees={addNewEmployees} />
    </div>
  );
}

export default App;
