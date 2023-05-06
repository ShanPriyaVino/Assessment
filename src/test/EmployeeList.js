import { useState } from "react";
// import { useNavigate, Link } from "react-router";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const [data, setData] = useState(["arun", "vijay", "sanju"]);

  return (
    <div>
      <p>EmployeeList</p>
      <ol>
        {data.map((e, i) => {
          return (
            <>
              <li>{e}</li>
              <Link to={"/employeeDetail"} state={data}>
                Learn More
              </Link>
            </>
          );
        })}
      </ol>
    </div>
  );
}
