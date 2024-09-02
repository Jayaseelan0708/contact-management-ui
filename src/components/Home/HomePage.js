
import React from 'react';
import './HomePage.css'
import HeaderNavbar from '../Navs/HeaderNavbar';
import LeftSideNavbar from '../Navs/LeftNavbar';
import Card from '../Navs/Card';

 
 
 
const  HomePage = () => {

  return (
    <div className="main">
      
      <div className="left-nav ">
        <LeftSideNavbar />
      </div>

      <div className="header-nav">
        
        <HeaderNavbar />
          <Card />

      </div>
       

        
         
      

    </div>
  );
};

export default HomePage;

