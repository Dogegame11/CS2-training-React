import data from "./card-data.json";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ title, image, link }) {
  return (
    <>
      <Link to={link} className="card">
        <div className="card">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
}

export default function CardList() {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Cards
          key={index}
          title={item.title}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
}
