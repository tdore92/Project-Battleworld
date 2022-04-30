import NavBar from "../common/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <h1>Welcome to Battleworld!</h1>
      <br />
      <div className="about-main-container">
        <div>
          This app uses{" "}
          <a
            href="https://akabab.github.io/superhero-api/api/"
            alt="api link"
            target="blank"
          >
            Akabab's superhero-api.
          </a>
        </div>
        <br />
        <div>
          Browse through the various heroes and villians from comic-book
          history. On closer inspection, each character has its own attributes -
          strength, intelligence, etc.
        </div>
        <br />
        <div>
          Once you've decided upon a character you like, bring them into{" "}
          <strong>Battleworld</strong>. Your character will be matched up with a
          random character from the API, and they will face off in the arena.
        </div>
        <br />
        Your objective is to{" "}
        <strong>
          select an attribute from your character that is higher than your
          opponents identical attribute
        </strong>
        . The attribute values are hidden, so you will have to guess who has the
        higher attribute (a knowledge of comic-book characters is recommended!).
        <br />
        <br />
        If you win, your opponent will be switched out for a new random
        opponent. If you lose, you lose.
        <br />
        <br />
        <div>
          <strong>Beat ten opponents in a row to win. </strong>Good luck, true
          believer!
        </div>
      </div>
    </>
  );
}

export default About;
