import React from "react";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

export const Route = ({ path, element }: RouteProps) => {
  return <div>{element}</div>;
};
