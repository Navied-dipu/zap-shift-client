import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data, Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Contexts/hooks/useAuth";
import SocialLogIn from "../../SocialLogIn/SocialLogIn";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilepic, setProfilepic] = useState(""); // ✅ fixed
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        const userProfile = {
          displayName: data.name,
          photoURL: profilepic, // ✅ comes from imgbb upload
        };

        updateUserProfile(userProfile)
          .then(() => {
            console.log("User profile updated");
            navigate("/"); // redirect after success
          })
          .catch((error) => {
            console.error("Profile update failed:", error.message);
          });
      })
      .catch((error) => {
        console.error("Signup failed:", error.message);
      });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_KEY
    }`;

    try {
      const res = await axios.post(imageUploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProfilepic(res.data.data.url); // ✅ correct setter
      console.log("Image uploaded:", res.data.data.url);
    } catch (err) {
      console.error("Image upload failed:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <h1 className="text-5xl font-bold">Create an Account</h1>

        {/* name field */}
        {/* <label className="label">Name</label>
        <input type="name" className="input" placeholder="Name" /> */}

        {/* name field */}
        <label className="label">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="input w-1/2"
          placeholder="Your name"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-600">Name is required</p>
        )}
        {/* Image field */}
        <label className="label">Image</label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="input w-1/2"
          placeholder=""
        />

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
