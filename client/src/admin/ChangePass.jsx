import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePass = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    generateNewPassword: "",
    reEnterNewPassword: "",
  });
  const navigate = useNavigate();

  const ClickChangePassword = async () => {
    console.log("my data -->", data);

    try {
      const confirm = window.confirm(
        "Do you want to change your Admin Password"
      );
      if (confirm) {
        if (data.generateNewPassword === data.reEnterNewPassword) {
          const response = await axios.post(
            "http://localhost:4500/api/admin/login",
            data
          );
          if (response.data.token) {
            // console.log(response.data.token);
            sessionStorage.setItem("token", response.data.token);
            navigate("/admin/dashboard");
          }
        } else {
          setMessage("Both Password are not same...");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div>
          <h1 className="text-center mt-3">
            <u>Change Password</u>
          </h1>
        </div>

        <div className="row  d-flex justify-content-center   ">
          <div className="col-sm-12 col-md-8 col-lg-4  border border-2 border-primary rounded-4 mt-4 mb-5 ">
            {/* hay */}
            <div className="col-12 mt-5">
              <label className="fw-bold">
                Generate New Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="generateNewPassword"
                placeholder="Generate New Password"
                required
                className="form-control border-2 mt-2 border-primary"
                onChange={(e) =>
                  setData({ ...data, generateNewPassword: e.target.value })
                }
              />
            </div>
            {/* byy */}

            {/* hay */}
            <div className="col-12 mt-3">
              <label className="fw-bold">
                Re-Enter New Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="reEnterNewPassword"
                placeholder="Re-Enter New Password"
                required
                className="form-control border-2 mt-2 border-primary"
                onChange={(e) =>
                  setData({ ...data, reEnterNewPassword: e.target.value })
                }
              />
            </div>
            {/* byy */}

            <div>
              <p className="text-danger fw-bold">{message}</p>
            </div>

            <div className="mt-5 d-flex justify-content-center mb-4">
              <button className="btn btn-primary" onClick={ClickChangePassword}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
