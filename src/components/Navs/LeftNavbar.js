// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

// const LeftSideNavbar = () => {
//   return (
//     <div className="leftnav">
//         <div className="col-6">    
//     <Navbar bg="primary" variant="primary" expand="lg" className="flex-column">
//       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="flex-column w-100">
//           <Nav.Link href="#home">
//             Home
//           </Nav.Link>
//           <Nav.Link href="#profile">
           
//             Profile
//           </Nav.Link>
//           <Nav.Link href="#settings">
            
//             Settings
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     </div>
//     </div>
//   );
// };

// export default LeftSideNavbar;
import React from 'react'
import "./Leftnav.css"
import { MdDashboard } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { TbFileTypography } from "react-icons/tb";
import { TbIcons } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";

function LeftNavbar() {
  return (
    <div className='containers'>
        <div className="sidebar">
            <div className="header">
                <p className='title'>content</p>
            </div>
            <hr />
            
            <div className="nav">
                <div className="menu">
                    <p className="tittle">
                        main
                    </p>
                    <ul className="ul">
                        <li className="active">
                            <a href="#">
                                <div className='icons'>
                                <i className='icon'><MdDashboard /></i>

                                </div>
                                
                                <span className='text'> Dashboard</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                            <div className='icons'>
                                <i className='icon'> <CiViewTable /></i>
                                </div>
                                <span className='text'>Table List</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                            <div className='icons'>
                                <i className='icon'><TbFileTypography/></i>
                                </div>
                                <span className='text'> Typography</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                            <div className='icons'>
                                <i className='icon'><TbIcons /></i>
                                </div>
                                <span className='text'> Icons</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                            <div className='icons'>
                                <i className='icon'><SiGooglemaps  /></i>
                                </div>
                                <span className='text'> Maps</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                            <div className='icons'>
                                <i className='icon'><IoNotificationsSharp   /></i>
                                </div>
                                <span className='text'> Notification</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftNavbar
