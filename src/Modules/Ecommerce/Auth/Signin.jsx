import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Card from "../../../Components/Card";
import CommonInput from "../../../Components/CommonInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../Redux/UserSlice";

const AuthForm = ({ title, buttonText, type }) => {
  const user = useSelector((s) => s.user.user);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(values.email)) {
      setError("Invalid email address");
      return;
    }
    if (type === "login") {
      if (user) {
        if (user.email === values.email && user.password === values.password) {
          dispatch(setUser(user));
          navigate("/ecommerce/home");
        } else {
          return alert("Invalid Email or Password");
        }
      } else {
        return alert("User not found");
      }
    } else {
      dispatch(setUser(values));
      navigate("/ecommerce/login");
    }
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid item xs={4}>
        <Card sx={{ bgcolor: "#212A3B" }}>
          <form onSubmit={handleSubmit}>
            <Grid
              sx={{
                p: "2rem",
              }}
            >
              <Typography sx={{ textAlign: "center", mb: "2rem" }}>
                {title}
              </Typography>
              <CommonInput
                required
                placeholder="Enter Email"
                error={!!error}
                helperText={error}
                name="email"
                label="Email"
                state={values.email}
                setState={(value) => {
                  setValues({ ...values, email: value });
                  setError("");
                }}
              />
              <CommonInput
                placeholder="Enter Password"
                name="password"
                label="Password"
                state={values.password}
                setState={(value) => setValues({ ...values, password: value })}
                type="password"
                required
              />
              <Typography>
                {type !== "login" ? (
                  <>
                    Already Signed up
                    <Link to={"/ecommerce/login"}> Click Here </Link> to Login
                  </>
                ) : (
                  <>
                    Already Signed up
                    <Link to={"/ecommerce/signup"}> Click Here </Link> to Signup
                  </>
                )}
              </Typography>
              <Grid
                sx={{ display: "flex", justifyContent: "center", mt: "3rem" }}
              >
                <Button variant="outlined" type="submit">
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
