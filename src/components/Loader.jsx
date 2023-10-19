import React from "react";

export default function Loader() {
  return (
    <div className="container">
      <svg
        className="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="160" stroke="#1FCDE7" />
        <circle cx="170" cy="170" r="135" stroke="#fff" />
        <circle cx="170" cy="170" r="110" stroke="#1FCDE7" />
        <circle cx="170" cy="170" r="85" stroke="#fff" />
      </svg>
    </div>
  );
}
