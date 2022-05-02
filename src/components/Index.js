import React from "react";
import NavBar from "../common/NavBar";
import axios from "axios";
import Card from "./Card";

function Index({ id }) {
  const [heroes, setHeroes] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  // requesting heroes data

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setHeroes(response.data);
    };
    getData();
  }, []);

  // handling user selection for selectbox

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  //handling user selection for searchbar

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  //clearing the search bars

  const handleClear = () => {
    setSearchTerm("");
    setSelectValue("All");
  };

  //filtering request based on user selection

  const filteredHeroes = heroes?.filter((hero) => {
    return (
      (hero.name === selectValue || selectValue === "All") &&
      hero.name.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <div>
        <NavBar />
        <div className="search-container">
          <div className="searchbar-container">
            <input
              placeholder="Search..."
              className="searchbar"
              onChange={handleInput}
              value={searchTerm}
            />
          </div>
          <div className="searchselect-container">
            <select
              className="searchselect"
              onChange={handleChange}
              value={selectValue}
            >
              <option>All</option>
              <option>A-Bomb</option>
              <option>Batman</option>
            </select>
          </div>
          <div className="search-button-container">
            <button onClick={handleClear} className="search-button">
              Clear
            </button>
          </div>
        </div>
        <div className="index-container">
          {filteredHeroes ? (
            filteredHeroes.map((hero) => <Card key={hero.id} {...hero} />)
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
