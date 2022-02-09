import "./app-filter.css";

const AppFilter = ({ setFilterFuncion, filter }) => {
  const buttonsData = [
    {
      name: "Все сотрудники",
      data: "all",
    },
    {
      name: "На повышение",
      data: "rise",
    },
    {
      name: "З/П больше 1000$",
      data: "1000",
    },
  ];
  const buttons = buttonsData.map((item, i) => {
    return (
      <button
        key={i}
        onClick={onClickButton}
        type="button"
        className={
          item.data === filter ? "btn btn-light" : "btn btn-outline-light"
        }
        data-filter={item.data}
      >
        {item.name}
      </button>
    );
  });

  function onClickButton(e) {
    setFilterFuncion(e.target.getAttribute("data-filter"));
  }

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
