import React from 'react'
import { useFormik } from "formik";
import validations from "./Validations";


function SignUp() {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues:{
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        passwordConfirm:"",
        country:"",
    },
    
    onSubmit: (values, actions) =>{
      console.log(values);
      

        setTimeout(() => {
            actions.resetForm();
        },1000)
    },
    validationSchema: validations,
  });


  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up </h1>
        
        <label>First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          autoFocus
        />
        {errors.firstName && touched.firstName && (
          <div className="error">{errors.firstName}</div>
        )}

        <br />

        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <div className="error">{errors.lastName}</div>
        )}

        <br />

        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <br />

        <label>Password</label>
        <input
          name="password"
          type="password"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}

        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onBlur={handleBlur}
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}

        <br />

        <select 
          name="country"
          value={values.country}
          onChange={handleChange}
        >
          <option value="">Select country</option>
          <option value={"turkey"}>Turkey</option>
          <option value={"england"}>England</option>
          <option value={"usa"}>Usa</option>
          <option value="germany">Germany</option>
        </select>


        <br />

        <button type="submit">Submit</button>
        
        <br />
        
      </form>
    </div>
  );
}

export default SignUp;