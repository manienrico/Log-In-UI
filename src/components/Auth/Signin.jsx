import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import './auth.css'
import pj from '../../images/peterJohn2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { LoginFunction } from '../../api/LoginAPI'

function Signin() {
  const [toggleEye, setToggleEye] = useState(false)

  const handleClick = () => {
    // passwordChange()
    setToggleEye(!toggleEye)

    // if(setToggleEye===true){
    //   setPasswordType='text'
    // }else{
    //   setPasswordType('password')
    // }
    
  }

  const SigninSchema = Yup.object().shape({
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required!').min(6, 'Too short')
  })

  return (
    <div className='app__signin'>
      <div className='app__signin-contain'>
        
        <div className='app__signin-contain__left'>
          <div className='app__signin-contain__left-content'>
            <div className='app__signin-contain__left-top'>
              <span>Logo Here</span>
              <h5>Welcome back !!!</h5>
            </div>
            <h1>Log In</h1>
            <Formik
            validationSchema={SigninSchema}
            onSubmit={(values)=>{
              LoginFunction.login(values).then((res)=>{
                console.log(res, "logged in");

              }).catch((err)=>{
                console.log(err, "failed to login");

              })
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
                      
                      <div className='pwd__contain'>
                        <input type={ toggleEye === false ? 'password':'text' }  placeholder='Password' {...field} />
                        <sup>
                          {/* <FontAwesomeIcon icon={faEye} style={{color: "rgba(255,166,201,1)",}} onClick={handleClick} /> */}
                          {
                            toggleEye === false ? (<FontAwesomeIcon icon={faEye} style={{color: "rgba(255,166,201,1)",}} onClick={handleClick} />)
                            : (<FontAwesomeIcon icon={faEyeSlash} style={{color: "rgba(255,166,201,1)",}} onClick={handleClick} />)
                          }
                        </sup>
                      </div>
                      
                        
                      {meta.touched && meta.error && (
                        <div className='error'>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <button type="submit">LOGIN IN<FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff", paddingLeft: '0.5rem'}} /></button>
              </Form>
            </Formik>
          </div>
          
          {/* <div className='app__signin-contain__left-pic'>
            <img src={pj} alt="Peter and John" />
          </div> */}
          {/* <span className='form__link'>Have no account <a href="signup">Create Account</a></span> */}
        </div>
        {/* <div className='app__signin-contain__between'>
          
        </div> */}
        
        <div className='app__signin-contain__right'></div>
        <div className='app__signin-contain__picture'>
          <img src={pj} alt="Peter and John" />
        </div>
      </div>
    </div>
  )
}

export default Signin