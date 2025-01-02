import React from 'react';
import '@/styles/warden.css';

const WardenPage: React.FC = () => {
  return (
    <div className="container">
      <div className="warden-section" role="region" aria-labelledby="warden-header">
        <div className="image-placeholder">
          <div className="circle"></div>
        </div>
        <h3 id="warden-header">RAKSH</h3>
        <p>Warden of Boys/Girls</p>
      </div>
      <div className="accepted-section" role="region" aria-labelledby="accepted-request-header">
        <h2 id="accepted-request-header">
          Accepted Requests
        </h2>
        <div className="row-container">
        {[
              { name: "JOHN", id: "4J12AB110", year: "3rd yr", reason: "Home visit", date: "22/12/2024-25/12/2024" },
              { name: "JOHN", id: "4J12AB110", year: "3rd yr", reason: "Home visit", date: "22/12/2024-25/12/2024" }
            ].map((request, index) => (
              <div className="request-row" key={index}>
                <div>
                  <h4 className="request-info">{request.name}</h4>
                  <p className="request-id">{request.id}</p>
                </div>
                <div className="request-detail">{request.year}</div>
                <div className="request-detail">{request.reason}</div>
                <div className="request-detail">{request.date}</div>
              </div>
            ))}
      </div>
      </div>
    </div>
  );
};
export default WardenPage;