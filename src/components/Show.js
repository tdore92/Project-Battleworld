import React from "react";
import axios from "axios";
import NavBar from "../common/NavBar";

function Show({ id }) {
  const [heroes, setHeroes] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/all.json`
      );
      setHeroes(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <NavBar />
      {heroes ? (
        heroes.map((hero) => <div key={hero.id}>{hero.name}</div>)
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Show;
