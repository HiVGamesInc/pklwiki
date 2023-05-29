"use client";

import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type LoaderType = SkeletonProps & {
  number?: number;
  className?: string;
  children?: React.ReactNode;
};

const Loader = ({
  number = 1,
  className = "",
  height = 140,
  width,
  children,
  ...props
}: LoaderType) => {
  return (
    <>
      {[...Array(number)].map((n, i) => (
        <div key={`sk-${i}`} className={`flex-1 ${className}`}>
          <Skeleton height={height} width={width} {...props} />
          {children}
        </div>
      ))}
    </>
  );
};

export default Loader;
