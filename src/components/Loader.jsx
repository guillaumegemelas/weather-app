import React from "react";

export default function Loader() {
  return (
    <div className="container">
      <svg
        className="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="160" stroke="#125969" />
        <circle cx="170" cy="170" r="135" stroke="#fff" />
        <circle cx="170" cy="170" r="110" stroke="#6C101A" />
        <circle cx="170" cy="170" r="85" stroke="#125969" />
      </svg>
    </div>
  );
}
