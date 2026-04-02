
# REACT SIGNUP FORM 🌟

## Proje Hakkında
This project is a user registration form built with React and Formik.
Form validation is handled using Yup. The form collects the following user information:
- First Name
- Last Name
- Email
- Password
- Confirm Password
- Country

After submitting the form, it automatically resets within 1 second and shows validation errors in real-time.

<img src="./Gif/Signup.gif" alt="Animasyon" />
---

## Features

- Form management with Formik
- Strong validation using Yup
- Password and confirm password verification
- Country selection via dropdown
- Real-time error messages
- Responsive and modern design  

---


## Installation & Running

- Clone the repository:

```
   git clone <repo-url>
```

 - Install dependencies:
   npm install
   veya
   yarn install

- Start the project:
   npm start
   veya
   yarn start

- Open in browser:
```
   http://localhost:3000
```
---

<img src="https://skillicons.dev/icons?i=html,css,js,php,bootstrap,tailwind,figma,photoshop,react" height="40" />


Usage
Fill in the form fields.
Click the Submit button.
Validation errors will appear in red under the relevant fields.
After a successful submit, the form resets automatically.

Code Example (SignUp.jsx):

```javascript
import React from 'react';
import { useFormik } from 'formik';
import validations from './Validations';

function SignUp() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: { firstName:"", lastName:"", email:"", password:"", passwordConfirm:"", country:"" },
    validationSchema: validations,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => actions.resetForm(), 1000);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  );
}

export default SignUp;

```


##  Developer

**Cihan Sarı**

* GitHub: https://github.com/ChnSari
* LinkedIn: https://linkedin.com/in/cihansri
* Email: [cihannsri@gmail.com](mailto:cihannsri@gmail.com)

---

##  License

[MIT](https://choosealicense.com/licenses/mit/)
