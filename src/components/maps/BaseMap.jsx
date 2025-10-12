import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { CRS } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./MapPage.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function BaseMap({
  photo,
  markers = [],
  imageWidth,
  imageHeight,
}) {
  const bounds = [
    [0, 0],
    [imageHeight, imageWidth],
  ];

  return (
    <div className="map-page">
      <MapContainer
        crs={CRS.Simple}
        bounds={bounds}
        minZoom={-1}
        className="leaflet-container"
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <ImageOverlay url={photo} bounds={bounds} />
        {markers.map((m, idx) => (
          <Marker key={idx} position={[m.lat, m.lng]}>
            <Popup>{m.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
