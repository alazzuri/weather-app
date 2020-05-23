//REACT
import React from "react";

//MATERIAL UI
import Skeleton from "@material-ui/lab/Skeleton";
import Divider from "@material-ui/core/Divider";

//STYLES
import "./styles.css";

const ForecastLoader = () => {
  return (
    <div className="forecast">
      <Skeleton variant="rect" height={"100%"}>
        <Skeleton variant="rect" className="pt10" height={210}>
          <Skeleton className="content-loader centered" height={50} />
          <Skeleton
            variant="circle"
            width={60}
            height={60}
            className="centered mb5"
          ></Skeleton>
          <Skeleton
            variant="rect"
            width={60}
            height={40}
            className="centered mb5"
          ></Skeleton>
          <Skeleton
            variant="text"
            height={30}
            className="centered content-loader"
          ></Skeleton>
        </Skeleton>
        <Divider />
        <Skeleton variant="rect" className="pt10" height={220}>
          <Skeleton className="content-loader centered" height={50} />
          <Skeleton
            variant="circle"
            width={60}
            height={60}
            className="centered mb5"
          ></Skeleton>
          <Skeleton
            variant="rect"
            width={60}
            height={40}
            className="centered mb5"
          ></Skeleton>
          <Skeleton
            variant="text"
            height={30}
            className="centered content-loader"
          ></Skeleton>
        </Skeleton>
        <Divider />{" "}
      </Skeleton>
    </div>
  );
};

export default ForecastLoader;
