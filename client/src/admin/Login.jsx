import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    userid: "",
    password: "",
  });
  const navigate = useNavigate();

  const LogInClick = async () => {
    try {
      const response = await axios.post("http://localhost:4500/api/admin/login", data);
      if (response.data.token) {
        // console.log(response.data.token);
        sessionStorage.setItem('token', response.data.token);
        navigate("/admin/dashboard");
      } else {
        console.log("invalid userid and password");
        setMessage("Invalid User ID and Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div>
          <h1 className="text-center">
            <u>LogIn</u>
          </h1>
        </div>

        <div className="row  d-flex justify-content-center   ">
          <div className="col-sm-12 col-md-8 col-lg-4  border border-2 border-primary rounded-4 mt-4 ">
            {/* hay */}
            <div className="col-12 mt-5">
              <label className="fw-bold">
                UserId <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="userid"
                placeholder="UserId"
                className="form-control border-2 mt-2 border-primary"
                onChange={(e) => setData({ ...data, userid: e.target.value })}
              />
            </div>
            {/* byy */}

            {/* hay */}
            <div className="col-12 mt-3">
              <label className="fw-bold">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control border-2 mt-2 border-primary"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            {/* byy */}

            <div>
              <p className="text-danger fw-bold">{message}</p>
            </div>

            <div className="mt-5 d-flex justify-content-center mb-4">
              <button className="btn btn-primary" onClick={LogInClick}>
                LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
