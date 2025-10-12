import { useParams } from "react-router-dom";
import data from "../components/data/page-data.json";
import BaseMap from "../components/maps/BaseMap";

export default function DynamicPage() {
  const { id } = useParams();
  const pageData = data.find((item) => item.id === Number(id));

  if (!pageData) {
    return <p>Page not found</p>;
  }

  const { title, photo, markers, imageWidth, imageHeight } = pageData;

  return (
    <div className="dynamic-page">
      <h1>{title}</h1>
      {photo && markers && imageWidth && imageHeight ? (
        <BaseMap
          photo={photo}
          markers={markers}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      ) : (
        <p>Неможливо відобразити карту</p>
      )}
    </div>
  );
}
