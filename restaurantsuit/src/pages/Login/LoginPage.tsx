import { useFormik } from "formik";
import React from "react";

import "./LoginPage.css";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="LoginPage">
      <h1>Welcome!</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="Form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div className="Form">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="Form">
          <button type="submit">Submit!</button>
        </div>
      </form>
    </div>
  );
}
