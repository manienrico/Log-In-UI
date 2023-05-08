import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import './auth.css'

function Signin() {

  const SigninSchema = Yup.object().shape({
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required!').min(6, 'Too short')
  })

  return (
    <div className='app__signin'>
      <div className='app__signin-contain'>
        <div className='app__signin-contain__left'>
          <h1>Log in</h1>
          <Formik
          validationSchema={SigninSchema}
          onSubmit={(values)=>{
            console.log(values)
          }}
          initialValues={{
            email: "",
            password: ""
          }}
          >
            <Form>
              <Field type="email" name="email" placeholder="Email">
              {({
                  field,
                  form: {touched,errors},
                  meta,
                }) => (
                  <div className='field__group'>
                    <input type='email' placeholder='Email' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field type="password" name="password" placeholder="Password" >
              {({
                  field,
                  form: {touched,errors},
                  meta,
                }) => (
                  <div className='field__group'>
                    <input type='password' placeholder='Password' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit">LOGIN</button>
            </Form>
          </Formik>
          <span className='form__link'>Have no account <a href="signup">Create Account</a></span>
        </div>
        <div className='app__signin-contain__right'></div>
        
      </div>
    </div>
  )
}

export default Signin