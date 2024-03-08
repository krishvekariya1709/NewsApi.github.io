import React, { useEffect } from "react";
import { useState } from "react";
import News from "./News";
export default function Card(props) {
  const [article, setarticle] = useState([]);
  const [country] = useState(["in"])

  let category = props.category
  let pageSize = props.pageSize
  useEffect(() => {
     async function fetchData() {
      const url =
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=c58fdd74a43b4b75afc5b1b0c463e300`;

      const response = await fetch(url);
      var data = await response.json();
      // console.log(data);
      console.log(data.articles);
      setarticle(data.articles);
    }
    fetchData();
  });
  
  return (<>
      <div className="container my-3">
    <h2 className='text-center'>News Api - Top Headlines</h2>
        <div className="row">
        {article.map((Element) => {
          // console.log(Element);
          return<div className="col-md-4">
          <News 
          Image = {Element.urlToImage}
          description = {Element.description}
          title = {Element.title}
          url = {Element.url}
          />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-dark" 
> &larr; Previous</button>

<button 
type="button" className="btn btn-dark" 
>Next &rarr;</button>
      </div>
      </div>
      </>
  );
}
