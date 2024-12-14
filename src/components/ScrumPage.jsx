import React from "react";
import ScrumList from "./ScrumList";
import MembersList from "./MembersList";

const scrumData = [
  {
    id: 1,
    title: "Scrum de Desarrollo Software - Aconex",
    description: "Plataforma de gestión de pacientes, profesionales y turnos de clinicas dentales",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Ventas - Aconex",
    description: "Plataforma de gestión de pacientes, profesionales y turnos de clinicas dentales",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Marketing - Aconex",
    description: "Plataforma de gestión de pacientes, profesionales y turnos de clinicas dentales",
    urlCta: "sad",
    openSpots: 0,
  },



  {
    id: 1,
    title: "Scrum de Desarrollo Software - YMS",
    description: "Plataforma de gestión de granjas avicolas",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Ventas - YMS",
    description: "Plataforma de gestión de granjas avicolas",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Marketing - YMS",
    description: "Plataforma de gestión de granjas avicolas",
    urlCta: "sad",
    openSpots: 0,
  },




  {
    id: 1,
    title: "Scrum de Desarrollo Software - Ofix",
    description: "Plataforma de gestión de servicios para el hogar",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Ventas - Ofix",
    description: "Plataforma de gestión de servicios para el hogar",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Marketing - Ofix",
    description: "Plataforma de gestión de servicios para el hogar",
    urlCta: "sad",
    openSpots: 0,
  },


  {
    id: 1,
    title: "Scrum de Desarrollo Software - A Todo Motor",
    description: "Plataforma de gestión de competiciones de rally",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Ventas - A Todo Motor",
    description: "Plataforma de gestión de competiciones de rally",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Marketing - A Todo Motor",
    description: "Plataforma de gestión de competiciones de rally",
    urlCta: "sad",
    openSpots: 0,
  },





  {
    id: 1,
    title: "Scrum de Desarrollo Software - Destored",
    description: "Plataforma para conectar profesionales digitales con empresas",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Ventas - Destored",
    description: "Plataforma para conectar profesionales digitales con empresas",
    urlCta: "sad",
    openSpots: 0,
  },
  {
    id: 1,
    title: "Scrum de Marketing - Destored",
    description: "Plataforma para conectar profesionales digitales con empresas",
    urlCta: "sad",
    openSpots: 0,
  },



];

const membersData = [
  {
    nombre: "Nombre 1",
    apellido: "Apellido 1",
    urlLinkedin: "https://www.linkedin.com/in/luciano-massa-075410238",
    correo: "lgmassa98@gmail.com",
    imagenUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGds_ZPuEqt5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671484350249?e=1739404800&v=beta&t=8w-Ncc5ThHuVOFJf0gGbxHE1HOeX1awvEZpqCDbhnN0"
  },
  {
    nombre: "Nombre 2",
    apellido: "Apellido 2",
    urlLinkedin: "https://www.linkedin.com/in/luciano-massa-075410238",
    correo: "nombre2@ejemplo.com",
    imagenUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGds_ZPuEqt5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671484350249?e=1739404800&v=beta&t=8w-Ncc5ThHuVOFJf0gGbxHE1HOeX1awvEZpqCDbhnN0"
  },
  {
    nombre: "Nombre 3",
    apellido: "Apellido 3",
    correo: "nombre3@ejemplo.com",
    imagenUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGds_ZPuEqt5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671484350249?e=1739404800&v=beta&t=8w-Ncc5ThHuVOFJf0gGbxHE1HOeX1awvEZpqCDbhnN0"
  },
];

const ScrumPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Scrums Abiertos</h1>
      <ScrumList scrums={scrumData} onSelect={(id) => console.log("Selected:", id)} />

      <h2 className="text-2xl font-bold text-center mt-10 mb-4">Miembros de la Red</h2>
      <MembersList members={membersData} />
    </div>
  );
};

export default ScrumPage;
