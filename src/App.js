// 	import logo from './logo.svg';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }

// export default App;


// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import {  fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
// import { useEffect, useState } from 'react';
// import Hero from './components/Hero/Hero';
// // import { Card } from '@mui/material';
// import Card from './components/Card/Card';

// function App() {
  
//   const [data, setData] = useState({});

//   const generateData = (key, source) => {
//     source().then((data) => {
//       setData((prevData) => {
//         return {...prevData, [key]: data};
//       })
//     })
//   }
  
//    useEffect(() => {
//     generateData("topAlbums", fetchTopAlbums);
//     generateData("newAlbums", fetchNewAlbums);
//     generateData("songs", fetchSongs);
//    }, [])

// const {topAlbums = [], newAlbums = [], songs = []} = data;

//   return (
//    <>
//        <div>
//         <Navbar />
//         <Hero />
//         <Card />
//         <Outlet context={{ data: {topAlbums, newAlbums, songs}}} />
//        </div>
//    </>
//   );
// }

// export default App;



import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </div>
  );
}



