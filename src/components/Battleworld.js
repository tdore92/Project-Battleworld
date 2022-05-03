import NavBar from "../common/NavBar";

function Battleworld() {
  return (
    <>
      <NavBar />
      <div className="battleworld-container">
        <div className="battleworld-hero-container">
          <div>Player</div>
        </div>
        <div className="battleworld-hero-container">
          <div>Enemy</div>
        </div>
      </div>
    </>
  );
}

export default Battleworld;
