import { useLocation } from "react-router-dom";

export default function EmployeeDetails(props) {
  const { state } = useLocation();
  return (
    <div>
      EmployeeDetails Page
      {state.map((e, i) => {
        return (
          <>
            <li>
              <p>name:{e}</p>
              <p> age:{10 + i}</p>
              <p>gender:"male"</p>{" "}
            </li>
          </>
        );
      })}
    </div>
  );
}
