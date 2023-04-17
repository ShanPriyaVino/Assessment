import { useState } from "react";

export default function Counter() {
  const [countLike, setCountLike] = useState(0);
  const [countUnLike, setCountUnLike] = useState(0);

  const onhandleButton = (e, action) => {
    if (action === "add") {
      setCountLike(countLike + 1);
    }
    if (action === "sub") {
      setCountUnLike(countUnLike + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div>
        <img
          alt="sampleImage"
          src="https://www.fotoaparat.cz/imgs/a/26/2639/0n1wjdf0-cr-em13-09-230x173x9.jpg"
        />
        <p>click the button to Like or unLike</p>
      </div>
      <div>
        <button onClick={(e) => onhandleButton(e, "add")}>Like</button>
        <p> {countLike}</p>
        <button onClick={(e) => onhandleButton(e, "sub")}>Unlike</button>
        <br />
        <p> {countUnLike}</p>
      </div>
    </div>
  );
}
