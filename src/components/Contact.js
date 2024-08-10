import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const Contact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactUsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="contact-us-container food-ordering-theme">
              <div className="form-group">
                <label htmlFor="name" className="label-text">Name</label>
                <input type="text" id="name" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label-text">Email</label>
                <input type="email" id="email" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label-text">Message</label>
                <textarea id="message" className="textarea-field"></textarea>
              </div>
              <div className='submit-btn-container'>
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
