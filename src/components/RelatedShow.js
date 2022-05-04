import React from "react";
import axios from "axios";
import RelatedCard from "./RelatedCard";

function RelatedShow() {
  const [relatedHeroes, setRelatedHeroes] = React.useState(null);

  // axios request for Related Heroes data

  React.useEffect(() => {
    const getRelatedData = async () => {
      const responseRelated = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setRelatedHeroes(responseRelated.data);
    };
    getRelatedData();
  }, []);

  return (
    <>
      <div className="related-column">
        <div className="related-container">
          {relatedHeroes ? (
            relatedHeroes.map((relatedHero) => (
              <RelatedCard key={relatedHero.id} {...relatedHero} />
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </>
  );
}

export default RelatedShow;
