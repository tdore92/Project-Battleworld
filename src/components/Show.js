import React from "react";
import axios from "axios";
import NavBar from "../common/NavBar";
import { useParams } from "react-router-dom";
import RelatedShow from "./RelatedShow";

function Show() {
  const { heroID } = useParams();
  const [hero, setHero] = React.useState(null);
  let heroSelectionArray = [];

  // axios request for Parameter ID

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${heroID}.json`
      );
      setHero(response.data);
    };
    getData();
  }, [heroID]);

  // button to add character to battleworld

  const handleClick = (event) => {
    const heroSelection = JSON.parse(window.localStorage.getItem("hero")) || [];
    heroSelectionArray = [...heroSelectionArray, hero];
    heroSelection.push(hero);
    localStorage.setItem("hero", JSON.stringify(heroSelection));
    console.log(`${hero.name} has been selected for Battleworld`);
  };

  return (
    <>
      <NavBar />
      <div className="show-page">
        <div className="show-page-container">
          {hero ? (
            <>
              <div className="show-container">
                <div className="show-image-container">
                  <div className="show-image-column">
                    <img src={hero.images.lg} alt="/" className="show-image" />
                    <div className="show-names-column">
                      <div className="show-name-text">{hero.name}</div>
                      <div className="show-alias-text">
                        {hero.biography.fullName}
                      </div>
                      <div className="show-bio-text">
                        <div>Publisher: {hero.biography.publisher}&copy;</div>
                        <div>
                          First Appearance: {hero.biography.firstAppearance}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div className="show-data-row">
                  <div className="show-column-1">
                    <div className="show-column-1-headers">Occupation</div>
                    <div>{hero.work.occupation}</div>

                    <div className="show-column-1-headers">Base</div>
                    <div>{hero.work.base}</div>

                    <div className="show-column-1-headers">Affiliations</div>
                    <div>{hero.connections.groupAffiliation}</div>

                    <div className="show-column-1-headers">Relatives</div>
                    <div>{hero.connections.relatives}</div>
                  </div>

                  {/**/}
                  <div className="show-column-2">
                    <div className="single-stat-container">
                      <div className="stats-text-container">
                        Intelligence ...
                      </div>
                      <div className="stats-number-container">
                        {hero.powerstats.intelligence}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Strength ...</div>
                      <div className="stats-number-container">
                        {hero.powerstats.strength}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Speed ...</div>
                      <div className="stats-number-container">
                        {hero.powerstats.speed}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Durability ...</div>
                      <div className="stats-number-container">
                        {hero.powerstats.durability}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Power ...</div>
                      <div className="stats-number-container">
                        {hero.powerstats.power}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Combat ...</div>
                      <div className="stats-number-container">
                        {hero.powerstats.combat}
                      </div>
                    </div>
                    <div className="show-button-container">
                      <button className="show-button" onClick={handleClick}>
                        Select Character
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <RelatedShow />
            </>
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Show;
