import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import './auth.css'

function Signup() {

  const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required('Value is required!'),
    email: Yup.string().required('Value is required!').email('Invalid email'),
    age: Yup.number().required('Value is required!'),
    gender: Yup.string().required('Value is required!'),
    country: Yup.string().required('Value is required!'),
    password: Yup.string().required('Value is required!').min(6, 'Too short').max(12, 'Too long'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],"Password does not match")
})

  return (
    <div>
      <div>
        <Formik
        validationSchema={SignupSchema}
        onSubmit={(values)=>{
          console.log(values)
        }}
        initialValues={{
          fullname: "",
          email: "",
          age: "",
          gender: "",
          country: "",
          password: "",
          confirmPassword: ""
        }}
        >
          {(errors,touched)=>(
            <Form>
              <Field type="text" name="fullname" >
                {({
                    field,
                    form: {touched,errors},
                    meta,
                  }) => (
                    <div>
                      <input type='text' placeholder='Names' {...field} />
                      {meta.touched && meta.error && (
                        <div className='error'>{meta.error}</div>
                      )}
                    </div>
                  )}
              </Field>
              <Field type="email" name="email" >
                {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <div>
                          <input type="email" placeholder="Email" {...field} />
                          {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                          )}
                        </div>
                    )}
              </Field>
              <Field type="number" name="age" >
                {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div>
                      <input type="text" placeholder="Age" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                )}
              </Field>
              <div>

              
              <label>Gender</label>
              <p><Field type="radio" name="gender" value="Male" >
                {({
                  field,
                  form: {touched,errors},
                  meta,
                }) => (
                  <div>
                    <input type='radio' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              Male 
              <Field type="radio" name="gender" value="Female" >
              {({
                  field,
                  form: {touched,errors},
                  meta,
                }) => (
                  <div>
                    <input type='radio' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>Female
              </p>
              
              </div>
              
              <Field name="country" >
              {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <div>
                    <input type="text" placeholder="Country" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
              )}
              </Field>
              <Field type="password" name="password"  >
              {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <div>
                    <input type="password" placeholder="password" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
              )}
              </Field>
              <Field type="password" name="confirmPassword"  >
              {({
                  field,
                  form: { touched, errors },
                  meta,
                }) => (
                  <div>
                    <input type="password" placeholder="Re-type password" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
              )}
              </Field>
              <button type='submit'>Sign up</button>
            </Form>
          )}
        </Formik>
      </div>
      <span>Already have an account <a href="/">Sign in</a></span>
    </div>
  )
}

export default Signup