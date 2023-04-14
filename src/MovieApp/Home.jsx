import React, { useState } from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);

  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((responce) => responce.json())
      .then((value) => setData(value.Search));
      setSearch("");
  };
  return (
    <div className="container">
      <h1 className="header">Search Your Favorite Movie</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="input"
          value={search}
          className="inputField"
          onChange={changeHandler}
        />
        <br />
        <input type="submit" value="Search" className="seacrhbtn" /> <br/>
      </form>
      <div className="cardContainer">
        {data.map((movie, title)=>{
            return <Card sx={{ maxWidth: 345 }} key={title} className="movieCards">
      <CardActionArea  sx={{height:"450px",width:"300px", borderRadius:"15px 15px 0 0"}}>
       <CardMedia
       sx={{height:"400px",width:"300px", borderRadius:"15px 15px 0 0", overflow:"hidden"}}
           component="img"
           image={movie.Poster}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"20px"}}>
             {movie.Title}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" variant="contained" sx={{marginTop:"80px", fontSize:"15px"}}>
           Download Poster
         </Button>
       </CardActions>
        </Card>})}
        </div>
      </div>
    
  );
};

export default Home;

