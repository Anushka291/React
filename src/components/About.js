import React from 'react';

export default function About() {
  return (
    <>
    <div className='container' style={{ marginTop: '80px', marginBottom: '80px' }}>
    <div className="jumbotron">
    <h1 className='text-center'>About Our Project</h1>
    <p className="lead">A comprehensive AI-powered platform that digitizes FRA records, creates an interactive FRA Atlas using satellite data, integrates WebGIS visualization, and builds a Decision Support System to recommend and layer Central Sector Schemes for FRA beneficiaries.</p>
    <hr className="my-4"/>
    <h5 className="fw-bold mb-4 text-center">Why This Project Stands Out</h5>
    <div className="row g-4">
      {[
        { title: 'Social Justice', desc: 'Addresses historical injustice for tribal communities', color: '#28a745' },
        { title: 'Climate Action', desc: 'Strengthens community-led forest conservation', color: '#20c997' },
        { title: 'Tech Innovation', desc: 'Blends law, AI, GIS, and governance', color: '#0dcaf0' },
        { title: 'Empowerment', desc: 'Puts Gram Sabhas at the center of governance', color: '#ffc107' },
        { title: 'Transparency', desc: 'Digitizes legacy records for accountability', color: '#fd7e14' },
        { title: 'SDG Alignment', desc: 'Supports multiple UN sustainability goals', color: '#6f42c1' },
      ].map((item, idx) => (
        <div key={idx} className="col-md-4">
          <div 
            className="d-flex align-items-start p-3 rounded-3 shadow-sm h-100"
            style={{
              background: '#f8f9fa',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
            }}
          >
            <span 
              className="badge me-3 mt-1" 
              style={{
                background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
                color: '#fff',
                fontSize: '1rem',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
            >
              {idx + 1}
            </span>
            <div>
              <h6 className="mb-1">{item.title}</h6>
              <p className="small mb-0">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
            <div className='container mt-3 my-3'>
                <div className="card shadow-lg border-0 mb-5 rounded-4" 
            style={{ 
            background: 'linear-gradient(135deg, #28a745, #85e085)', 
            color: 'white' 
            }}>
        <div className="card-body p-5">
            <h3 className="fw-bold mb-4 text-center">Impact & Reach</h3>
            <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
                <h2 className="fw-bold display-6">200M+</h2>
                <p className="mb-0 small">Forest Dwellers</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
                <h2 className="fw-bold display-6">4 States</h2>
                <p className="mb-0 small">Initial Focus</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
                <h2 className="fw-bold display-6">3 Rights</h2>
                <p className="mb-0 small">IFR, CR, CFR</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
                <h2 className="fw-bold display-6">Pan-India</h2>
                <p className="mb-0 small">Scalable Model</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}
