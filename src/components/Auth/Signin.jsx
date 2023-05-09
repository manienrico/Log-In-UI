import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import './auth.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Signin() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    setShowPassword(!showPassword)
  }

  const SigninSchema = Yup.object().shape({
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required!').min(6, 'Too short')
  })

  return (
    <div className='app__signin'>
      <div className='app__signin-contain'>
        <div className='app__signin-contain__left'>
          <div className='app__signin-contain__left-top'>
            <span>Logo Here</span>
            <h5>Welcome back !!!</h5>
          </div>
          <h1>Log In</h1>
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
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="password">Password</label>
                    <input type='password' placeholder='Password' {...field}
                     eye={
                      <div className='eye__position'>
                        {/* {
                          showPassword === 'false' ? (<FontAwesomeIcon icon={faEye} style={{color: "rgba(255,166,201,1)",}} onClick={handleClick} />)
                          : (<FontAwesomeIcon icon={faEyeSlash} style={{color: "#adc4eb",}} onClick={handleClick} />)
                        } */}
                        
                      </div>
                      }
                      />
                      <FontAwesomeIcon icon={faEye} style={{color: "rgba(255,166,201,1)",}}  />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit">LOGIN IN<FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff", paddingLeft: '0.5rem'}} /></button>
            </Form>
          </Formik>
          {/* <span className='form__link'>Have no account <a href="signup">Create Account</a></span> */}
        </div>
        <div className='app__signin-contain__right'></div>
        
      </div>
    </div>
  )
}

export default Signin