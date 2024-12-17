import React from "react";
import ScrumList from "./ScrumList";

const scrumData = [
  {
    id: 1,
    title: "Equipo de Desarrollo Software - OFIX",
    description: "Plataforma para contratar y ofrecer servicios para el hogar",
    urlCta: "sad",
    openSpots: 2,
  },
  {
    id: 1,
    title: "Equipo de Marketing - OFIX",
    description: "Plataforma para contratar y ofrecer servicios para el hogar",
    urlCta: "sad",
    openSpots: 2,
  },
  {
    id: 1,
    title: "Equipo de Marketing - YMS",
    description: "Plataforma para gestión de granjas avicolas",
    urlCta: "sad",
    openSpots: 3,
  },
  ,
  {
    id: 1,
    title: "Equipo de Marketing - A Todo Motor",
    description: "Plataforma para gestión de competiciones de rally",
    urlCta: "sad",
    openSpots: 3,
  },


];



const Scrums = () => {
  return (
    <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Scrums Abiertos</h1>
        <ScrumList scrums={scrumData} onSelect={(id) => console.log("Selected:", id)} />
    </div>
  );
};

export default Scrums;
