import React from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import { useParams } from "react-router-dom";

function Show() {
  const { heroID } = useParams();
  const [hero, setHero] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${heroID}.json`
      );
      setHero(response.data);
    };
    getData();
  }, [heroID]);

  const handleClick = (event) => {
    console.log("click is " + event.target.value);
  };

  return (
    <>
      <NavBar />
      {hero ? (
        <div className="show-container">
          <div className="show-column-1">
            <img src={hero.images.lg} alt="/" className="show-image" />
            <div>
              <strong>{hero.name}</strong>
            </div>
            <div>AKA: {hero.biography.fullName}</div>
            <div>
              Appearance:
              {hero.appearance.gender} {hero.appearance.race}
            </div>
            <div>Morality: {hero.biography.alignment}</div>
          </div>
          <div className="show-column-2">
            <h2>Stats</h2>
            <div>Intelligence: {hero.powerstats.intelligence}</div>
            <div>Strength: {hero.powerstats.strength}</div>
            <div>Speed: {hero.powerstats.speed}</div>
            <div>Durability: {hero.powerstats.durability}</div>
            <div>Power: {hero.powerstats.power}</div>
            <div>Combat: {hero.powerstats.combat}</div>
            <button onClick={handleClick}>Select Challenger</button>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Show;
