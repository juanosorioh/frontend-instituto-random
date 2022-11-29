import React from "react";
import { Routes, Route } from "react-router-dom";
import AdministrarCarreras from "./pages/AdministrarCarreras";
import AdministrarMaterias from "./pages/AdministrarMaterias";
import AdministrarPersonas from "./pages/AdministrarPersonas";
import AlumnosListados from "./pages/alumnosListados";
import AnunciosForm from "./pages/anunciosForm";
import AnunciosListados from "./pages/anunciosListados";
import CarrerasForm from "./pages/carrerasForm";
import CarrerasListados from "./pages/carrerasListados";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MateriasForm from "./pages/materiasForm";
import MateriasListadas from "./pages/materiasListadas";
import NoExiste from "./pages/NoExiste";
import Table from "./pages/Table";

const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/verAnuncios" element={<AnunciosListados/>}/>
        <Route path="/verAlumnos" element={<AlumnosListados />} />
        <Route path="/verCarreras" element={<CarrerasListados />} />
        <Route path="/verMaterias" element={<MateriasListadas />} />
        <Route path="/formCarreras" element={<CarrerasForm />} />
        <Route path="/formMaterias" element={<MateriasForm />} />
        <Route path="/formAnuncios" element={<AnunciosForm />} />
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
