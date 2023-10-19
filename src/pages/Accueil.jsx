import React from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <div className="flex flex-col items-center body-candle">
      <Link to={"/weather"}>
        <button className="w-48 pt-2 pb-2 pl-4 pr-4 mt-48 ml-12 text-2xl bg-blue-200 border-2 border-blue-500 rounded-full shadow-xl shadow-current hover:bg-blue-300 hover:scale-105 ">
          Entrer
        </button>
      </Link>

      <div className="wrapper">
        <div className="candles">
          <div className="light__wave"></div>
          <div className="candle1">
            <div className="candle1__body">
              <div className="candle1__eyes">
                <span className="candle1__eyes-one"></span>
                <span className="candle1__eyes-two"></span>
              </div>
              <div className="candle1__mouth"></div>
            </div>
            <div className="candle1__stick"></div>
          </div>

          <div className="candle2">
            <div className="candle2__body">
              <div className="candle2__eyes">
                <div className="candle2__eyes-one"></div>
                <div className="candle2__eyes-two"></div>
              </div>
            </div>
            <div className="candle2__stick"></div>
          </div>
          <div className="candle2__fire"></div>
          <div className="sparkles-one"></div>
          <div className="sparkles-two"></div>
          <div className="candle__smoke-one"></div>
          <div className="candle__smoke-two"></div>
        </div>
        <div className="floor"></div>
      </div>
    </div>
  );
}
