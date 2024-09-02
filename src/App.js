// App.js
import React  from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/Login/LoginForm';
import HomePage from './components/Home/HomePage';
import SignupForm from './components/Signup/SignupForm';
 


const App = () => {
  
  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
    <Route path="/" element ={<LoginForm />} /> 
    <Route path="/home" element ={ <HomePage />} /> 
    <Route path="/Signupform" element ={ <SignupForm/>} /> 

    </Routes>
    </BrowserRouter>
  
    </>
  );
};

export default App;
