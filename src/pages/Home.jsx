import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/perfil";

const initialState = { email: "", password: "" };


const Home = ({ token, login }) => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(values.email, values.password);
  };

  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {navigate("verAnuncios")}
  }, [token]);


  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Instituto Random</h1>
            <p className="col-lg-10 fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              consectetur nulla quaerat totam quo fugit eaque? Distinctio nobis
              voluptatum unde!
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {/*               <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              {/*               <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { token: state.perfil.token };
};

export default connect(mapStateToProps, { login })(Home);
