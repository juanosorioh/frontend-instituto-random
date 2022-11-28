import React from "react";
import { Routes, Route } from "react-router-dom";
import AlumnosListados from "./pages/alumnosListados";
import AnunciosForm from "./pages/anunciosForm";
import AnunciosListados from "./pages/anunciosListados";
import CarrerasForm from "./pages/carrerasForm";
import CarrerasListados from "./pages/carrerasListados";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MateriasForm from "./pages/materiasForm";
import MateriasListadas from "./pages/materiasListadas";
import Table from "./pages/Table";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/verAnuncios" element={<AnunciosListados/>}/>
        <Route path="/verAlumnos" element={<AlumnosListados />} />
        <Route path="/verCarreras" element={<CarrerasListados />} />
        <Route path="/verMaterias" element={<MateriasListadas />} />
        <Route path="/formCarreras" element={<CarrerasForm />} />
        <Route path="/formMaterias" element={<MateriasForm />} />
        <Route path="/formAnuncios" element={<AnunciosForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
       {/*  <Route path="/table" element={<Table />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
