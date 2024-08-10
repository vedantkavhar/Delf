import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { SignInAuth } from '../utils/helperFunctions';

const SignInSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password must contain at least one uppercase letter, lowercase letter, number, and be at least 8 characters long'
    )
    .required('Password is required'),
  agreeToTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
});

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className='signin-body'> 
      <div className="signin-container" >
        <div className="signin-header">
          <h2>SignUp</h2>
          <Link to="/login" className="close-icon"></Link>
        </div>
        
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            agreeToTerms: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              try {
                const authenticationMessage = SignInAuth(values.email, values.fullName, values.password);
                if (authenticationMessage === "Successfully Account Created") {
                  alert(authenticationMessage+" with \n"+JSON.stringify(values, null, 2));
                }
                else {
                  alert(authenticationMessage);
                }
                setSubmitting(false);
                navigate("/login");
              } catch (error) {
                console.error('Error during signIn:'+ error);
                alert("Error during signIn");
                // Handle error appropriately
              }
            }, 400);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              <div className="form-group">
                <Field 
                  type="text" 
                  name="fullName" 
                  id="fullName"  
                  placeholder="Full Name"
                />
                <ErrorMessage name="fullName" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <Field 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className='form-group'>
                <Field 
                  type='password' 
                  name='password' 
                  id='password' 
                  placeholder='Password'
                />
                <ErrorMessage name='password' component='div' className='error-message' />
              </div>
              <div className="form-group" id='agreeToTermsLabelError'>
                <div id='agreeToTermsLabel'>
                  <Field type="checkbox" name="agreeToTerms" id="agreeToTerms" />
                  <label htmlFor="agreeToTerms">I agree to Foodies's <span className='color-red'>Terms of Service, Privacy Policy</span> and <span className='color-red'>Content Policies</span></label>
                </div>
                <ErrorMessage name="agreeToTerms" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting || !(isValid && dirty)} className="submit-btn">
                Create Account
              </button>
            </Form>
          )}
        </Formik>

        <div className="toggle-signin">
          <p>Already have an account? <Link to="/login" >LogIn</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
