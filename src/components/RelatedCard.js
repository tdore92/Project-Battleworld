import { Link } from "react-router-dom";

function RelatedCard({ id, images }) {
  return (
    <>
      <div className="show-card">
        <div key={id}>
          <Link to={`/index/${id}`}>
            <div>
              <img src={images.sm} alt="/" className="related-card-image" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RelatedCard;
