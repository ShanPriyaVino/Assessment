import { useNavigate } from "react-router";

export default function EmployeeOverview() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/employeeResume");
  }
  return (
    <div>
      EmployeeOverview
      <button onClick={handleClick}>resume</button>
    </div>
  );
}
