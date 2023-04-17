import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export default function ApiCall() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=sport&apikey=1a9ecd2af44b4069a22aa28f1e47f135&page=1"
      )
      .then((res) => {
        setData(res.data.articles);
        setSearch(res.data.articles);
      });
  }, []);

  const onHandleChange = (e) => {
    setFilterData(e.target.value);
  };

  const onHandleClick = () => {
    const result = search.filter((e) => {
      return e.author.toLowerCase().indexOf(filterData.toLowerCase()) > -1;
    });
    setData(result);
  };

  const onHandleCancel = () => {
    setData(search);
  };

  const importantNew = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apikey=1a9ecd2af44b4069a22aa28f1e47f135&page=1)"
      )
      .then((res) => setData(res.data.articles));
  };

  return (
    <div>
      <div className="center">
        <input type="text" onChange={(e) => onHandleChange(e)} />
        <button onClick={() => onHandleClick()}>Search</button>
        <button onClick={() => onHandleCancel()}>Cancel</button>
      </div>

      <br />
      <div className="center">
        <table border={1}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.title}</td>
                <td>{e.author}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="center">
        <button onClick={() => importantNew()}>Important News</button>
      </div>
    </div>
  );
}
