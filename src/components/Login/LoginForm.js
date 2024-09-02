
import {React, useState   }  from 'react';
import { Formik, Form, Field } from 'formik';
import {   Row, Col, Button,FormGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import './LoginForm.css'
import _ from 'lodash';
import ApiService from '../../Service/api.service'; 
 

   
let  defaultValues ={
  "email": "",
  "password":"",
 }
const LoginForm = () => {
 const [initialValues, setInitialValues] = useState(defaultValues); 
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });
  const handleLogin = (obj) => {
    try {
      let payload = {
        "email": obj?.email,
        "password": obj?.password
      }
      console.log('payload:', payload);
      ApiService.login(payload)
        .then((response) => {
          console.log('response:', response.data);
        })
  
    }
    catch(err) {
      console.err("Exception occurred in handleLogin---", err);
    }
  }

    const handleSignupButtonClick = () => {
      navigate('/signupform');
    };
  

    return (
      <div className='container'>
        <div className="loginform">
          <h2 className='login-header'>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleLogin(values)}
        
          >
            {({ isSubmitting, errors, touched, isValid, dirty }) => (
              <Form >
                <FormGroup>
                  <Row>
                    <Col>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                              
                        className={`form-control form-field ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                      {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col>
                      <Field
                        type="password"
                        name="password"
                        placeholder="password"
                        className={`form-control form-field ${errors.password && touched.password ? 'is-invalid' : ''}`} />
                      {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}

                    </Col>
                  </Row>
                </FormGroup>
                {!_.isEmpty(errors) && (
                  <div className="error-summary">
                    Please fix the errors above before submitting.
                  </div>
                )}
                <Button className='btn-login' variant="secondary" type="submit" disabled={isSubmitting || !isValid || !dirty}>Login</Button>
                <div className=''>
                  <Button className='btn-signup' variant="primary" onClick={handleSignupButtonClick}>Sign Up</Button>
                </div>


                {/* git status
git commit -a -m "Your comments"
git branch
git pull origin branchname
git push origin branchname */}
           
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };


export default LoginForm;
