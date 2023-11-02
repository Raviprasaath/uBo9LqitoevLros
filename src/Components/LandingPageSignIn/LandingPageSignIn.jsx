import React,{useEffect,useState} from "react";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import CardsCarousel from "./CardsCarousel/CardsCarousel";
import TopCarousel from "./TopCarousel/TopCarousel";
import {movieList} from "../ApiFetch";
import NavbarforSignIn from "../NavbarForSignIn/NavbarForSignIn";
import { useLocation } from "react-router-dom";

function LandingPageSignIn(props) {

const typeArray =["video song","web series","tv show",
"short film","movie","documentary","trailer"]

const [moviesInfo, setMoviesInfo] = useState([]);

const location  = useLocation();
const { NavBarControl } = props;

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await movieList();
      setMoviesInfo(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
  NavBarControl(location.pathname);
}, []);

  console.log("rsult",location.pathname)
  return (
  < div style ={{backgroundColor:"#00050d"}}>

    <div className="carousels-container" 
      style={{paddingBottom:"300px"}}  
    >

      <TopCarousel  moviesInfo={moviesInfo} />

      {typeArray.map((type)=>{
        return  <CardsCarousel key={type} 
        moviesInfo={moviesInfo} type={type}
          />
      })}
    
    </div>
      
      <FooterForSignIn/>

    </ div>
  );
}
export default LandingPageSignIn;
