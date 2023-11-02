import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {addtoWatchlist,getWatchlist} from '../WatchList/WatchlistService' 
import { BiSolidRightArrow } from "react-icons/bi";
import {BiCheck} from "react-icons/bi";
import { FiPlus} from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import "./Gridcards.css"
function Gridcards(props){
   const {cardsInfo}= props;
    console.log("ci",cardsInfo._id);



    const addMovieToWatchList = (movie) => {
      addtoWatchlist(movie._id).then(response=> {
        console.log("repo",response)
        setIsWatchListClicked(!isWatchListClicked);
  
      })
      .catch(err=>{
        console.log("error",err)
      })
    }
  return(
    <>
   <div style={{backgroundColor:"#00050d",
   paddingBottom:"200px"} }>
   <div className="gridcards-container">
        {
        cardsInfo
            // .filter((item)=> item.type===`${type}`)
            // .slice(0,20)
            .map((item,index) => (
              
              <div className="card-items" key={item._id}>
                
              <Link key={`${item._id}&${index}`} to={`/videodetails/${item._id}`}>
              <img src={item.thumbnail} alt="" className="image-item" />
              </Link>

              <div className="card-details">
                <div className="prime-content">
                  <img src={bluetick} alt="" />
                  <p>Included with Prime</p>
                </div>
              
                <div id="play-control">
                  <button id="play-btn">
                    <BiSolidRightArrow id="play-btn-icon" />
                  </button>
                  <p>Watch Now</p>
                  <div id="watchlist-icon">
                    
                    <button 
                    onClick={
                      ()=> addMovieToWatchList(item) 
                    }
                    id="watchlist-icon-button">
                     
                       <BiCheck id="plus-icon"/> 
                    </button>
                    <span className="watchlist-tooltip">Watchlist</span>
                    <button id="more-icon-button">
                      <BsThreeDotsVertical id="threedots-icon" />
                    </button>
                    <span className="more-tooltip">More</span>
                  </div>
                </div>

                <div className="item-title">
                  <p>{item.title}</p>
                </div>


                <div className="item-content">
                  <p>{item.description}</p>
                </div>
              </div>
             
            </div>
            ))}
        </div>
   </div>

   <FooterForSignIn/>
   </>
  )
}
export {Gridcards};