import React from "react";
import "../index.css";
import useRouter from "../hooks/useRouter";

export default function About() {
  const { push } = useRouter();
  return (
    <div>
      <div>About</div>
      <button onClick={() => push("/")}>root</button>
    </div>
  );
}
