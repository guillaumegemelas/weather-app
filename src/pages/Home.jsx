import React from "react";

//test import googlemap API-------------------
import { useLoadScript } from "@react-google-maps/api";
//--------------------------------------------
import { useState } from "react";

import axios from "axios";

//test import react query------------
import { useQuery } from "react-query";
import GoogleMapToSet from "../components/GoogleMapToSet";
import Loader from "../components/Loader";

export default function Home() {
  const [city, setCity] = useState("");

  //------partie script map------------------------
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["data", city],
    queryFn: async () => {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&query=${city}`
      );
      console.log(response.data, "log response.data");
      // console.log(response.data.error.code, "log data error");
      // requete asynchrone: obligé de mettre data&& deavant le log
      //{
      //   data && console.log(data, "log de data homeNormal dans requete");
      // }
      return response.data;
    },
    enabled: false, // Désactive l'appel à la requête tant que nous n'avons pas cliqué sur le bouton: sinon ca rame bcp
    cacheTime: 0, // Ignorer le cache pour éviter que si on rentre une seconde fois une meme ville useQuery n'affiche directement les données venant du cache enregistré
  });

  //rajouter !isLoaded pour que la map puisse se charger
  if (isLoading || isFetching || !isLoaded) return <Loader />;

  if (data?.error) {
    console.dir(data.error.info);
    console.dir("Il y a une erreur, la ville n'existe pas");
  }

  return (
    <div className="flex flex-col items-center h-screen bg-slate-300 pt-96 bg-custom">
      {!data ? (
        <div>
          <h2 className="flex mb-12 text-4xl text-white">
            <span class="relative flex h-3 w-3 mr-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Météo en direct: Selectionnez votre ville
          </h2>
        </div>
      ) : (
        <h2 className="mb-12 text-4xl text-white ">
          Météo à {data.location && data.location.name}
        </h2>
      )}

      <form
        id="form-one"
        onSubmit={(e) => {
          e.preventDefault();
          if (!city) {
            alert("Veuillez entrer le nom d'une ville.");
          } else {
            refetch();
          }
        }}
      >
        <label className="mb-12 mr-8 text-2xl text-white" htmlFor="city-input">
          Ville:
        </label>{" "}
        <input
          className="px-3 py-2 leading-tight text-gray-700 border-2 border-blue-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city-input"
          type="text"
          value={city}
          placeholder="Enter a city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="pt-2 pb-2 pl-4 pr-4 ml-12 bg-blue-200 rounded-full"
          type="submit"
        >
          Rechercher
        </button>
      </form>

      {data && !data.error && (
        <div className="flex flex-col items-center w-6/12 px-8 pt-6 pb-8 mt-12 mb-4 text-xl text-white bg-blue-200 shadow-md rounded-xl bg-opacity-20">
          {/* rajout de condtions avant les logs car généraient des erreurs : data non dispos pour location.lat et lon? */}
          {/* {console.log(data, "log de data homeNormal")}
          {console.log(city, "log de cityNormal")}
          {console.log(data.location && data.location.lat, "log de latNormal")}
          {console.log(data.location && data.location.lon, "log de lonNormal")} */}
          <p className="mt-2">
            Température actuelle à {data.location && data.location.name}:{" "}
            {data.current && data.current.temperature} °C
          </p>
          <p className="mt-4">
            Taux d'humidité: {data.current && data.current.humidity}%
          </p>
          <p className="mt-4">
            Pression: {data.current && data.current.pressure} Mpa
          </p>
          <p className="mt-4">Pays: {data.location && data.location.country}</p>
          <p>Région: {data.location && data.location.region}</p>
          <div className="flex justify-center mt-12 w-128">
            <img
              className="rounded-full weathericon"
              src={data.current && data.current.weather_icons[0]}
              alt=""
            />
          </div>{" "}
          <div>
            <GoogleMapToSet
              lat={Number(data.location.lat)}
              lng={Number(data.location.lon)}
            />
          </div>
        </div>
      )}
      {data?.error && (
        <div className="flex flex-col items-center w-6/12 px-8 pt-6 pb-8 mt-12 mb-4 text-xl text-white bg-blue-200 shadow-md rounded-xl bg-opacity-20">
          <p>Veuillez selectionner une ville qui existe!</p>
        </div>
      )}
    </div>
  );
}
