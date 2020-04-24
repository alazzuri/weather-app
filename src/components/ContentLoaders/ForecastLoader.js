import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Divider from "@material-ui/core/Divider";

const ForecastLoader = ({ items }) => {
  return (
    <div>
      <Skeleton variant="rect" className="card-header" height={80}>
        <Skeleton className="w-50 mx-auto" height={50} />
      </Skeleton>
      <Skeleton variant="rect" className="card-body" height={"100%"}>
        <Skeleton className="w-50 mx-auto mb-3" height={30} />
        {items.map((item) => (
          <div>
            <Skeleton variant="rect" className="mb-2" height={200}>
              <Skeleton className="w-50 mx-auto" height={30} />
              <Skeleton
                variant="circle"
                width={60}
                height={60}
                className="mx-auto mb-2"
              ></Skeleton>
              <Skeleton
                variant="rect"
                width={60}
                height={60}
                className="mx-auto"
              ></Skeleton>
              <Skeleton
                variant="text"
                height={30}
                className="mx-auto w-75"
              ></Skeleton>
            </Skeleton>
            <Divider />
          </div>
        ))}
      </Skeleton>
    </div>
  );
};

export default ForecastLoader;
