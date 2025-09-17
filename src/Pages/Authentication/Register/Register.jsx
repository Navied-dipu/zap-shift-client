import React from "react";
import { useForm } from "react-hook-form";
import { data, Link } from "react-router-dom";
import useAuth from "../../../Contexts/hooks/useAuth";
import SocialLogIn from "../../SocialLogIn/SocialLogIn";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        error.message;
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <h1 className="text-5xl font-bold">Create an Account</h1>

        {/* name field */}
        {/* <label className="label">Name</label>
        <input type="name" className="input" placeholder="Name" /> */}

        {/* email field */}
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input w-1/2"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600">Email is required</p>
        )}
        {/* password field */}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          className="input w-1/2"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-600">Password must be 6 charecter</p>
        )}
        {errors.password?.type === "" && (
          <p className="text-red-600">Password must be 6 charecter</p>
        )}
      </fieldset>
      <button className="btn w-1/2 btn-primary text-black mt-4">
        Register
      </button>
      <p>
        Already have an account
        <Link to="/login">
          <span className="btn  btn-link">LogIn</span>
        </Link>
      </p>
      <SocialLogIn></SocialLogIn>
    </form>
  );
}
