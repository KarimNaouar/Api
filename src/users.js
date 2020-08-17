import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p />
      <table style={{ border: "solid" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td style={{ border: "solid", textAlign: "center" }}>
                <p>{el.name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Users;
