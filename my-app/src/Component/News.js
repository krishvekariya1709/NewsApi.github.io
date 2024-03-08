import React from "react";

export default function News(props) {
  return (
    
      
         <div className="my-3">
          <div className="card">
            <img src={props.Image} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a
                target="_blank"
                rel="noreferrer"
                href={props.url}
                className="btn btn-dark"
              >
                View News
              </a>
            </div>
            </div>
      
          </div>
          
         
      
    
  );
}
