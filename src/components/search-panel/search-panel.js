import { useState } from "react";

import "./search-panel.css";

const SearchPanel = ({ setTermFuncion }) => {
  const [term, setTerm] = useState("");

  function onChangeTerm(e) {
    setTermFuncion(e.target.value)
      setTerm(e.target.value);
  }
  return (
    <input
      value={term}
      onChange={onChangeTerm}
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
    />
  );
};

export default SearchPanel;
