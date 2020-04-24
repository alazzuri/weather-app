import React from "react";

import Skeleton from "@material-ui/lab/Skeleton";

const LocationCardLoader = () => (
  <div>
    <Skeleton variant="rect" className="card-header" height={80}>
      <Skeleton className="w-50 mx-auto" height={50} />
    </Skeleton>
    <Skeleton variant="rect" className="card-body" height={180}>
      <Skeleton
        variant="circle"
        width={60}
        height={60}
        className="mx-auto mb-1"
      ></Skeleton>
      <Skeleton
        variant="rect"
        width={60}
        height={60}
        className="mx-auto mb-1"
      ></Skeleton>
      <Skeleton variant="text" height={30} className="mx-auto w-75"></Skeleton>
    </Skeleton>
  </div>
);

export default LocationCardLoader;
