import React from "react";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const countries = [
    { id: "1", name: "INDIA" },
    { id: "2", name: "USA" },
  ];
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    setCountry(countries);
  }, []);

  const states = [
    {
      id: "1",
      countryId: "1",
      name: "Haryana",
      id: "2",
      countryId: "1",
      name: "Madhya Pradesh",
      id: "3",
      countryId: "2",
      name: "Texas",
      id: "4",
      countryId: "2",
      name: "California",
    },
  ];

  function handleCountry(id) {
    const dt = states.filter((x) => x.countryId === id);
    setState(dt);
  }

  return (
    <div>
      <div>
        <select
          className="dropdown"
          onChange={(e) => handleCountry(e.target.value)}
        >
          <option value="0">Select Any Country</option>
          {country.map((ctr, ind) => {
            return <option value={ctr.id}>{ctr.name}</option>;
          })}
        </select>
      </div>

      <div>
        <select className="dropdown">
          <option value="0">Select Any State</option>
          {state
            ? state.map((ctr, ind) => {
                return <option value={ctr.id}>{ctr.name}</option>;
              })
            : ""}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
