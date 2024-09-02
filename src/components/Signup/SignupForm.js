
import React,{ useState,useEffect }  from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button,FormGroup } from 'react-bootstrap';
// import _ from 'lodash';
import { useNavigate } from "react-router-dom";
import "./SignupForm.css"

let defaultvalues={
  firstName: "",
  lastName: "",
  email: "",
  password:"",

}
const SignupForm = () => {
  const [initialValues, setInitialValues] = useState(defaultvalues);

  useEffect(() => {
    const fetchedInitialValues = {
      firstName: 'Arun',
      lastName: 'Kumar',
      email: 'arun.kumar@example.com',
      password: '',
    };
    setInitialValues(fetchedInitialValues);
  }, []);  
  
const navigate = useNavigate();
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleSubmit = (values,{ setSubmitting } ) => {
    console.log('Signup Values:', values);
    navigate("/signupform");
    alert("signing successful");
    navigate("/");
    setSubmitting(false);
  };

  return (
    <>
      
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className="text-center">Sign up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>handleSubmit(values)}
          >
            {({ values,errors,touched, handleChange, handleBlur,handleSubmit, isSubmitting,}) => (
              <Form>
                 <FormGroup>
                <Row>
                  <Col>
                    <Field type="text"
                     name="firstName" 
                      placeholder="FirstName" 
                      className={`form-control form-field ${errors.firstName && touched.email ? 'is-invalid' : ''}`} />
              {errors.firstName && touched.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </Col>
                  <Col>
                 
                  <Field type="text" 
                  name="lastName" 
                   placeholder="lastName"
                    className={`form-control form-field ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`} />
              {errors.lastName && touched.lastName && <div className="invalid-feedback">{errors.lastName}</div>} 
                  </Col>
                </Row> 
                </FormGroup>

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
                <FormGroup>
                    <Row>
                        <Col>
                        <Field
                   type="password" 
                   name="confirmPassword"
                   placeholder="confirmPassword "
                   
                    className={`form-control form-field${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`} />
              {errors.confirmPassword && touched.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}


                        </Col>
                    </Row>
                </FormGroup>

                 
                <Button 
                type="submit" 
                variant="primary" 
                disabled={isSubmitting} block>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </Button>

              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SignupForm;
