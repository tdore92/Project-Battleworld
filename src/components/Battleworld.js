import NavBar from "../common/NavBar";
import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Battleworld() {
  const [enemies, setEnemies] = React.useState(null);
  const [statusUpdate, setStatusUpdate] = React.useState("Select a stat!");
  const [roundUpdate, setRoundUpdate] = React.useState(1);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const navigate = useNavigate();
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

  // victory screen

  const victory = () => {
    if (roundUpdate === 5) {
      console.log("Victory! You have beaten Battleworld.");
    }
  };

  //COMPARE

  const handleClick = (e, value) => {
    const userStat = value;
    console.log(userStat);
    const enemyStat = 50;

    compareStats(userStat, enemyStat);
    victory();
  };

  const compareStats = (userStat, enemyStat) => {
    const playerWins = userStat > enemyStat;
    const draw = userStat === enemyStat;
    if (playerWins) {
      setStatusUpdate("You won the round! Pick another stat.");
      setRoundUpdate(roundUpdate + 1);
      //select next random opponent
    } else if (draw) {
      setStatusUpdate("It's a draw! Pick another stat.");
    } else {
      setIsGameOver(true);
    }
  };

  //button logic

  const handleRestart = () => {
    setIsGameOver(false);
    setRoundUpdate(1);
  };

  const handlePickNewCharacter = () => {
    navigate("/index");
  };

  return (
    <>
      <NavBar />

      <div className="statusupdate">
        <div>{statusUpdate}</div>
        <div>Round {roundUpdate} of 5</div>
      </div>

      <div className="battleworld-card-container">
        {!isGameOver ? (
          <>
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
                          <div className="stats-text-container">
                            Strength ...
                          </div>
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
                            onClick={(e) =>
                              handleClick(e, hero.powerstats.speed)
                            }
                          >
                            {hero.powerstats.speed}
                          </div>
                        </div>
                        <div className="single-stat-container">
                          <div className="stats-text-container">
                            Durability ...
                          </div>
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
                            onClick={(e) =>
                              handleClick(e, hero.powerstats.power)
                            }
                          >
                            {hero.powerstats.power}
                          </div>
                        </div>
                        <div className="single-stat-container">
                          <div className="stats-text-container">Combat ...</div>
                          <div
                            className="stats-number-container"
                            onClick={(e) =>
                              handleClick(e, hero.powerstats.combat)
                            }
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
                          <div className="stats-text-container">
                            Strength ...
                          </div>
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
                          <div className="stats-text-container">
                            Durability ...
                          </div>
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
          </>
        ) : (
          <>
            <p>Game Over</p>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handlePickNewCharacter}>Pick a Combatant</button>
          </>
        )}
      </div>
    </>
  );
}

export default Battleworld;
