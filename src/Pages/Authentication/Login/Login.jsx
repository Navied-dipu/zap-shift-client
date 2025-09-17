import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Contexts/hooks/useAuth";
import { Link } from "react-router-dom";
import SocialLogIn from "../../SocialLogIn/SocialLogIn";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-600">This field is required</span>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-600">This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 charecter</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
        </fieldset>
        <button className="btn w-1/2 text-black btn-primary mt-4">Login</button>
        <p>
          Don't have an account
          <Link to="/register">
            <span className="btn btn-link">Register</span>
          </Link>
        </p>
      </form>
     <SocialLogIn></SocialLogIn>
    </div>
  );
}
