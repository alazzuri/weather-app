//REACT
import React from "react";

//LIBS
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";

//STYLES
import "./styles.css";

const LocationCardLoader = () => (
  <div>
    <Skeleton variant="rect" height={70}>
      <Skeleton className="content-loader centered card-title" height={50} />
    </Skeleton>
    <Divider />
    <Skeleton variant="rect" className="centered pt10" height={180}>
      <Skeleton
        variant="circle"
        width={60}
        height={60}
        className="centered mb5"
      ></Skeleton>
      <Skeleton
        variant="rect"
        width={60}
        height={60}
        className="centered mb5"
      ></Skeleton>
      <Skeleton
        variant="text"
        height={30}
        className="content-loader centered mb5"
      ></Skeleton>
    </Skeleton>
  </div>
);

export default LocationCardLoader;
