import React,{ createContext, useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { LogInAuth, UserName } from '../utils/helperFunctions';
import { UserContext } from "../utils/UserContext";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
  .required('Password is required'),
});

const logIn = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  
  const handleClick = (email,password) => {
    const cname=UserName(email,password);
    console.log(cname+"  "+email+"  "+password);
    updateUser(cname, email);
  };

   

  return (
    <div className='signin-body'>
      <div className='signin-container'>
        <div className='signin-header'>
          <h2>Login</h2>
          <Link to='/' className='close-icon'></Link>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              try {
                const logInMessage=LogInAuth(values.email,values.password);
                if(logInMessage==='Successfully logged in!'){
                  console.log(values.email+" ----  "+values.password)
                  handleClick(values.email,values.password);
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                  navigate('/');
                  setSubmitting(false);
                }
                else if(logInMessage==='Wrong password'){
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                }
                else{
                  alert(logInMessage+" with \n"+JSON.stringify(values, null, 2));
                  navigate('/signIn');
                }
              } 
              catch (error) {
                alert('Error during login:',);    // Handle error appropriately
              }            
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-group'>
                <Field type='email' name='email' id='email' placeholder='Email' />
                <ErrorMessage name='email' component='div' className='error-message' />
              </div>
              <div className='form-group'>
                <Field type='password' name='password' id='password' placeholder='Password' />
                <ErrorMessage name='password' component='div' className='error-message' />
              </div>
              <button type='submit' disabled={isSubmitting} className='submit-btn'>
                Login
              </button>
            </Form>
          )}
        </Formik>

        <div className='toggle-signin'>
          <p>
            Don't have an account? <Link to='/signin'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default logIn;
