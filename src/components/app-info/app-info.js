import "./app-info.css";

const AppInfo = ({ data }) => {
  const employeesCount = data.reduce((sum, item) => {
    return sum + 1;
  }, 0);

  const riceCount = data.reduce((sum, item) => {
    return item.rise ? sum + 1 : sum;
  }, 0);

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {riceCount}</h2>
    </div>
  );
};

export default AppInfo;
