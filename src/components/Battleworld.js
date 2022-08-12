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

  let enemyId = Math.floor(Math.random() * (563 - 1)) + 1;
  console.log(enemyId);

  // filter enemy id by enemyId variable

  const filteredEnemy = enemies?.filter((enemy) => {
    return enemy.id === enemyId;
  });

  console.log(filteredEnemy);

  //COMPARE

  const handleClick = (e, value) => {
    const userSelection = value;
    console.log(userSelection);
    const enemySelection = 50;

    compareStats(userSelection, enemySelection);
  };

  const compareStats = (userStat, enemyStat) => {
    const playerWins = userStat > enemyStat;
    const draw = userStat === enemyStat;

    if (playerWins) {
      console.log("player wins!");
    } else if (draw) {
      console.log("It's a draw! Pick another stat.");
    } else {
      console.log("player lost!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="battleworld-container">
        <div className="battleworld-hero-container">
          {selectedHero ? (
            selectedHero.map((hero) => (
              <div key={hero.id}>
                <div>
                  <div>
                    <div>{hero.name}</div>
                    <div>{hero.biography.fullName}</div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">
                        Intelligence ...
                      </div>
                      <div
                        className="stats-number-container"
                        onClick={(e) =>
                          handleClick(e, hero.powerstats.intelligence)
                        }
                      >
                        {hero.powerstats.intelligence}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Strength ...</div>
                      <div
                        className="stats-number-container"
                        onClick={(e) =>
                          handleClick(e, hero.powerstats.strength)
                        }
                      >
                        {hero.powerstats.strength}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Speed ...</div>
                      <div
                        className="stats-number-container"
                        onClick={(e) => handleClick(e, hero.powerstats.speed)}
                      >
                        {hero.powerstats.speed}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Durability ...</div>
                      <div
                        className="stats-number-container"
                        onClick={(e) =>
                          handleClick(e, hero.powerstats.durability)
                        }
                      >
                        {hero.powerstats.durability}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Power ...</div>
                      <div
                        className="stats-number-container"
                        onClick={(e) => handleClick(e, hero.powerstats.power)}
                      >
                        {hero.powerstats.power}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Combat ...</div>
                      <div
                        className="stats-number-container"
                        onClick={(e) => handleClick(e, hero.powerstats.combat)}
                      >
                        {hero.powerstats.combat}
                      </div>
                    </div>
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
            filteredEnemy.map((enemy) => (
              <div key={enemy.id}>
                <div>
                  <div>
                    <div>{enemy.name}</div>
                    <div>{enemy.biography.fullName}</div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">
                        Intelligence ...
                      </div>
                      <div className="stats-number-container">
                        {enemy.powerstats.intelligence}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Strength ...</div>
                      <div className="stats-number-container">
                        {enemy.powerstats.strength}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Speed ...</div>
                      <div className="stats-number-container">
                        {enemy.powerstats.speed}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Durability ...</div>
                      <div className="stats-number-container">
                        {enemy.powerstats.durability}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Power ...</div>
                      <div className="stats-number-container">
                        {enemy.powerstats.power}
                      </div>
                    </div>
                    <div className="single-stat-container">
                      <div className="stats-text-container">Combat ...</div>
                      <div className="stats-number-container">
                        {enemy.powerstats.combat}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Battleworld;
