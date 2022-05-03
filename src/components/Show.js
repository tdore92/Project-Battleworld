import React from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import { useParams } from "react-router-dom";
import RelatedCard from "./RelatedCard";

function Show() {
  const { heroID } = useParams();
  const [hero, setHero] = React.useState(null);
  const [relatedHeroes, setRelatedHeroes] = React.useState(null);

  // axios request for parameter ID

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${heroID}.json`
      );
      setHero(response.data);
    };
    getData();
  }, [heroID]);

  // axios request for related data

  React.useEffect(() => {
    const getRelatedData = async () => {
      const responseRelated = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setRelatedHeroes(responseRelated.data);
    };
    getRelatedData();
  }, []);

  // filtered related characters by ID match

  const filteredRelatedHeroes = relatedHeroes?.filter((relatedHero) => {
    return (
      relatedHero.powerstats.intelligence === hero.powerstats.intelligence &&
      relatedHero.name !== hero.name
    );
  });

  console.group(filteredRelatedHeroes);

  // button to add character to battleworld

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
            <div>{hero.biography.fullName}</div>
            {/**/}
            <div>
              {hero.appearance.gender} {hero.appearance.race}
            </div>
            <div>
              <div>
                <strong>Biography</strong>
              </div>
            </div>
            <div>Morality: {hero.biography.alignment}</div>
            <div>Weight: {hero.appearance.weight}</div>
            <div>Height: {hero.appearance.height}</div>
            <div>Eye Colour: {hero.appearance.eyeColor}</div>
            <div>Hair Colour: {hero.appearance.hairColor}</div>
            <br />
            <div>Occupation: {hero.work.occupation}</div>
            <div>Base: {hero.work.base}</div>
            <div>Affiliations: {hero.connections.groupAffiliation}</div>
          </div>

          {/**/}
          <div className="show-column-2">
            <div className="stats-column">
              <div>Stats</div>
              <div>Intelligence: {hero.powerstats.intelligence}</div>
              <div>Strength: {hero.powerstats.strength}</div>
              <div>Speed: {hero.powerstats.speed}</div>
              <div>Durability: {hero.powerstats.durability}</div>
              <div>Power: {hero.powerstats.power}</div>
              <div>Combat: {hero.powerstats.combat}</div>
              <div className="show-button-container">
                <button className="show-button" onClick={handleClick}>
                  Select Challenger
                </button>
              </div>
            </div>
            <div className="show-related-column">
              <div className="related-title-container">
                <div>RELATED</div>
              </div>
              <div className="show-related-container">
                {filteredRelatedHeroes ? (
                  filteredRelatedHeroes.map((relatedHero) => (
                    <RelatedCard key={relatedHero.id} {...relatedHero} />
                  ))
                ) : (
                  <p>loading</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Show;
