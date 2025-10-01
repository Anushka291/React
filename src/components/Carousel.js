import React from 'react'

export default function Carousel() {
  return (
    <div className="container my-0 h-586px" >
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="/WhatsApp Image 2025-10-01 at 11.47.52 PM.jpeg" className="d-block w-100" alt="..." style={{ height: "680px"}}/>
        </div>
        <div className="carousel-item">
        <img src="/prime-minister-narendra-modi-with-his-cabinet-868576.jpg" className="d-block w-100" alt="..." style={{ height: "680px"}} />
        </div>
        <div className="carousel-item">
        <img src="/forest-dwellers-reuters15219.jpg" className="d-block w-100" alt="..." style={{ height: "680px"}} />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </div>
  )
}
