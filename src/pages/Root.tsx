import React from "react";
import "../index.css";
import useRouter from "../hooks/useRouter";

export default function Root() {
  const { push } = useRouter();
  return (
    <div>
      <div>Root</div>
      <button onClick={() => push("/about")}>about</button>
    </div>
  );
}
