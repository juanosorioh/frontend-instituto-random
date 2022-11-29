import React from "react";
import { Routes, Route } from "react-router-dom";
import AdministrarCarreras from "./pages/AdministrarCarreras";
import AdministrarMaterias from "./pages/AdministrarMaterias";
import AdministrarPersonas from "./pages/AdministrarPersonas";
import AlumnosListados from "./pages/alumnosListados";
import AnunciosForm from "./pages/AgregarAnuncios";
import AnunciosListados from "./pages/anunciosListados";
import CarrerasForm from "./pages/AgregarCarreras";
import CarrerasListados from "./pages/carrerasListados";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MateriasForm from "./pages/AgregarMaterias";
import MateriasListadas from "./pages/MateriasListados";
import NoExiste from "./pages/NoExiste";
import Table from "./pages/TableStudents";

const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/verAnuncios" element={<AnunciosListados/>}/>
        <Route path="/verAlumnos" element={<AlumnosListados />} />
        <Route path="/verCarreras" element={<CarrerasListados />} />
        <Route path="/verMaterias" element={<MateriasListadas />} />
        <Route path="/AgregarCarreras" element={<CarrerasForm />} />
        <Route path="/AgregarMaterias" element={<MateriasForm />} />
        <Route path="/AgregarAnuncios" element={<AnunciosForm />} />
        <Route path="/adminCarrera" element={<AdministrarCarreras />} />
        <Route path="/adminMateria" element={<AdministrarMaterias />} />
        <Route path="/adminPersona" element={<AdministrarPersonas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoExiste />} />
       {/*  <Route path="/table" element={<Table />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
