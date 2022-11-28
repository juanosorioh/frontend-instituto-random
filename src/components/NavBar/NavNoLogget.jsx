import React from "react";
import { useNavigate } from "react-router-dom";

const NavNoLogget = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button" onClick={()=>{navigate('/login')}}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default NavNoLogget;
