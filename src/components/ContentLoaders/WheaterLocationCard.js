import React from "react";
import ContentLoader from "react-content-loader";

const LocationCardLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto"
  >
    <rect x="59" y="-12" rx="5" ry="5" width="221" height="38" />
    <rect x="137" y="31" rx="50" ry="50" width="60" height="49" />
    <rect x="68" y="87" rx="5" ry="5" width="202" height="9" />
    <rect x="78" y="119" rx="5" ry="5" width="184" height="8" />
  </ContentLoader>
);

export default LocationCardLoader;
