import './WatchList.css'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {addtoWatchlist,getWatchlist} from './WatchlistService' 
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import {BiCheck} from "react-icons/bi";
import { FiPlus} from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
function WatchList(){

    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [watchlist,setWatchList]=useState([]);
    const [buttonText,SetButtonText]=useState("Most Recent Addition")

  const [isWatchListClicked,setIsWatchListClicked]=useState(false);

    console.log("is",isLoaded);

    useEffect(()=>{ 
        // if(!isLoaded){
        getWatchlist()
        .then(response=>{
            setWatchList(response.data.data.shows)
            console.log("watch",response.data.data.shows);
            setIsLoaded(!isLoaded); 
          })

    // }
    },[isLoaded,isWatchListClicked])

  // button handler
    const recentButtonHandler = () => {
    setIsArrowRotated(!isArrowRotated);
    };


   const location = useLocation();
   console.log("loca",location);

    // add to watchList
    const addMovieToWatchList = (movie) => {
      addtoWatchlist(movie._id).then(response=> {
        console.log("repo",response)
        setIsWatchListClicked(!isWatchListClicked);
  
      })
      .catch(err=>{
        console.log("error",err)
      })
    }
  

    const optionHandler = (text)=>{
      SetButtonText(text);
      console.log("val",text);
    }
  
    return(
        <div className='watchList-parent'>
        <div className="WatchList-header">
            Watchlist
        </div>
        <div className="WatchList-btn-container">
            <div className="WatchList-filter-btn-cotainer">
            <button className='WatchList-filter-btn'>
                All
            </button>
            <button className='WatchList-filter-btn'>
                Movies
            </button>
            <button className='WatchList-filter-btn'>
                Tv shows
            </button>
            </div>

            <div className="recent-btn-container">

            <button
      className={`WatchList-filter-btn ${isArrowRotated ? 'recent-btn' : ''}`}
      onClick={recentButtonHandler}
    >
      {buttonText}
      <IoIosArrowDown className={`down-arrow-icon ${isArrowRotated ? 'rotate-arrow' : ''}`} />
    </button>
    <div className={`recent-btn-content${isArrowRotated?'recent-btn-content':'' }`}>
      <p class="recent-btn-option" onClick={ () => optionHandler("Most Recent Addition")}>Most Recent Addition</p>
      <p class="recent-btn-option" onClick={ () => optionHandler("Title: A-Z")}>Title: A-Z</p>
      <p class="recent-btn-option last-option" onClick={ () => optionHandler("Title: Z-A")}>Title: Z-A</p>
    </div>
      
            </div>
        </div>
        <div className="watchList-cards">
        {watchlist && 
        watchlist
            // .filter((item)=> item.type===`${type}`)
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
    )
}
export {WatchList};