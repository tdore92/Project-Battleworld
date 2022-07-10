import NavBar from "../common/NavBar";
import React from "react";
import axios from "axios";

function Battleworld() {
  const [enemies, setEnemies] = React.useState(null);

  //GET PLAYER SELECTION

  const [selectedHero] = React.useState(() =>
    JSON.parse(window.localStorage.getItem("hero"))
  );

  //GET RANDOM ENEMY SELECTION

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setEnemies(response.data);
    };
    getData();
  }, []);

  // generate random number to match id

  let enemyId = Math.floor(Math.random());
  console.log(enemyId);

  // filter enemy id by enemyId variable

  const filteredEnemy = enemies?.filter((enemy) => {
    return enemy.id === enemyId;
  });

  console.log(filteredEnemy);

  //COMPARE

  return (
    <>
      <NavBar />
      <div className="battleworld-container">
        <div className="battleworld-hero-container">
          {selectedHero ? (
            selectedHero.map((hero) => (
              <div key={Math.random()}>
                <div>
                  <div>
                    <div>{hero.name}</div>
                    <div>{hero.biography.fullName}</div>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p>...loading</p>
          )}
        </div>
        <div className="battleworld-hero-container">
          {filteredEnemy ? (
            filteredEnemy.map((enemy) => <div key={enemy.id}>{enemy.name}</div>)
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Battleworld;
