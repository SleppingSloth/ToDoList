import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, deleteEmployees, addIncrease, addRise }) => {
  const postList = data.map((item) => {
    const { id, ...dataItem } = item;
    return (
      <EmployeesListItem
        addIncrease={addIncrease}
        key={id}
        data={item}
        deleteEmployees={deleteEmployees}
        addRise={addRise}
      />
    );
  });

  return <ul className="app-list list-group">{postList}</ul>;
};

export default EmployeesList;
