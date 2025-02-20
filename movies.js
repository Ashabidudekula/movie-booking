
const cinema = {
    name: "AMB Cinemas",
    location: "HiTech City",
    movies: [
        { 
            title: "Chhaava", 
            shows: ["10AM", "3PM"],
            seats: [160, 100],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1OS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg"  
        },
        {
            title: "Thandel",
            shows: ["11AM", "4PM"],
            seats: [160, 100],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA0MC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384012-amntvfwlrl-portrait.jpg"  
        },
        {
            title:"Sidlingu 2",
            shows: ["9AM", "2AM"],
            seats: [150, 50],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS44LzEwICA0OTEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00431990-ufutfmdqjn-portrait.jpg" 
        },
        {
            title: "Vidaamuyarchi",
            shows: ["6AM", "11PM"],
            seats:[150, 60],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA1MS40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408788-qwbtscvqpf-portrait.jpg"   
        },
        // Added new movie
        {
            title: "Brave New World",
            shows: ["1PM", "7PM"],
            seats: [180, 120],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICA2SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg"  
        }
    ]
};
console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0].title);
console.log("second Movie:", cinema.movies[1].title);
console.log("Third Movie:", cinema.movies[2].title);
console.log("Four Movie:", cinema.movies[3].title);
console.log("Fifth Movie:", cinema.movies[4].title);


let movieName = "Godavari";
let rating = 4.5; 
let isBlockbuster = true;
console.log();

let movie = { 
    name: "Ashta Chemma", 
    genre: "Love" 
  }; 
  
  let showTimes = ["10AM", "2PM", "6PM"];

  let myMovie = {
    title: "Your Favorite Movie",
    actors: ["Actor1", "Actor2"],
    rating: 4.8,
    is3D: false
  };


  let movie1 = { 
    name: "Game Changer", 
    director: "Rajamouli" 
  };

  let movie2 = {};
movie2.name = "RRR";
movie2.budget = "500Cr";

let movie3 = Object.create(movie1);
movie3.name = "Bahubali";

let prices = [250, 300, 400]; // Literal
let seats = new Array(60, 60, 60); // Constructor
let codes = Array.from("A12B34"); // From string

let theater = {
    name: "PVR Cinemas",
    screens: ["Screen1", "Screen2"],
    facilities: ["AC", "Dolby Atmos"],
    showCount: 5
  };
