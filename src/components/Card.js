import { Link } from "react-router-dom";

function Card({ id, images, name }) {
  return (
    <>
      <div key={id} className="card-container">
        <Link to={`/index/${id}`}>
          <div>
            <img src={images.md} alt="/" className="card-image" />
          </div>
          <div className="card-names-container">
            <div className="card-name">{name}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
