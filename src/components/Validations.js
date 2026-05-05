
import { object, string, ref } from 'yup';

const validations = object({
    firstName: string()
    .required("Please Enter Your Firs Name"),
    
    lastName: string()
    .required("Please Enter Your Last Name"),
    
    email: string()
    .email("Email is invalid!")
    .required("Please Enter Your email"),

    password: string()
    .max(12,"Password must be no more then 12")
    .required("Please Enter Your Password")
    .min(8, "Password must be at least 8 characters"),

    passwordConfirm: string()
    .required("Please Enter Your Confirm Password")
    .oneOf([ref("password"), null], "Passwords must match"),

    country: string().required("Please select your country"),
    
  });

export default validations;