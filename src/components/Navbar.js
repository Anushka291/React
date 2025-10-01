import React from 'react'

export default function Navbar() {
  return (
        <header className="d-flex flex-wrap justify-content-center py-3 border-bottom bg-dark"> 
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
            <span className="fs-3 mx-5 text-white">🌲 FRALYTICS</span> 
            </a> 
            <ul className="nav nav-pills"> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white" aria-current="page">Home</a>
                </li> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">About</a>
                </li> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">Features</a>
                </li> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">Process</a>
                </li> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">Contact Us</a>
                </li> 
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">FAQs</a>
                </li>
            </ul> 
        </header> 
  )
}
