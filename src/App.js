import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [text,setText]=useState("");
  
  const [movie,setMovie]=useState([]);

   
  const changeText=((event)=>{
       setText(event.target.value)
  });
   
  const getMovie =(e)=>{
      e.preventDefault();
      axios.get(`https://www.omdbapi.com/?s=${text}&apikey=1e9c9857`)
      .then((response)=>{
        console.log(response)
        setMovie(response.data.Search);
      })
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="navbar-brand" >Movie App</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="nav-link active" aria-current="page">Home</div>
          </li>
          
        </ul>
        <form className="d-flex" onSubmit={getMovie}>
          <input className="form-control me-2" type="search" placeholder="Search" value={text}  onChange={changeText} aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

<div className='container my-3'>
     <div className='row'>
          
          {
           movie.map((value)=>{
            return(
              <div  className='fit col-3 my-3'>
              <div  className="card" style={{width: "15rem"}}>
              <img src={value.Poster} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h3 className="card-title">{value.Year}</h3>
                <h4 className="card-text">{value.Title}</h4>
            
               </div>
               </div>
               </div>
            )
           })
          }
          </div>
     </div>


  </>
  );
}

export default App;
