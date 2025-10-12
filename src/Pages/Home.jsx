import cardData from "../components/data/card-data.json";
import pageData from "../components/data/page-data.json";
import { Link } from "react-router-dom";
import "../components/Cards.css";

function Cards({ title, image, id }) {
  return (
    <Link to={`/page/${id}`} className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="card-list">
      {cardData.map((item) => {
        const page = pageData.find(
          (p) => p.title.toLowerCase() === item.title.toLowerCase()
        );
        console.log("pageData", pageData);
        console.log("page", page);
        console.log("id", page ? page.id : null);
        return (
          <Cards
            key={item.title}
            title={item.title}
            image={item.image}
            id={page ? page.id : null}
          />
        );
      })}
    </div>
  );
}
