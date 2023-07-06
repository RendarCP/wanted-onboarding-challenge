import React, { useState, useEffect } from "react";

interface RouterProps {
  children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(window.location.pathname);

  const routerUpdate = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", routerUpdate);
    return () => {
      window.removeEventListener("popstate", routerUpdate);
    };
  }, []);

  // --- 현재 path왜 children props path와 같을시 특정 children 렌더링
  return (
    <>
      {React.Children.toArray(children).map(
        (router: React.ReactNode | React.ReactElement) => {
          return router.props.path == path && router;
        }
      )}
    </>
  );
};
