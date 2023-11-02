import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import {BiCheck} from "react-icons/bi";
import { useEffect, useState } from "react";

// import {addtoWatchlist} from "../../Components/commons/WatchlistService"

import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { Link, useLocation } from "react-router-dom";

const CarouselComponent= (props) => {
  const { moviesInfo,type } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
 
  const location = useLocation();

    const [isLocationWatchList,setIsLocationWatchList] = useState(false);
    useEffect(()=>{
      setIsLocationWatchList(true);
    },[location])



  const [isWatchListClicked,setIsWatchListClicked]=useState(false);
  // const addMovieToWatchList = (movie) => {
  //   addtoWatchlist(movie._id).then(response=> {
  //     console.log("repo",response)
  //     setIsWatchListClicked(!isWatchListClicked);
  //   })
  //   .catch(err=>{
  //     console.log("error",err)
  //   })
  // }

  

  return (
    < div className="carousel-container">

    <div  className="Carousel-header">
      {
        isLocationWatchList && <div className="Carousel-header-prime">WatchList-{type}</div>
      }
        <div className="Carousel-header-prime">Prime</div>
        {type}
      </div>



    <Carousel
      className="cards-carousel"
      responsive={responsive}
      showDots={true}
      centerMode={true}
      renderButtonGroupOutside={true}
    >
      {moviesInfo &&
        moviesInfo.map((item, index) => (

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
                // onClick={()=> {addMovieToWatchList(item)}} 
                id="watchlist-icon-button">
                 
                  {!isWatchListClicked &&  <FiPlus id="plus-icon" />}
                  {isWatchListClicked &&  <BiCheck id="plus-icon" />} 
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
    </Carousel>
    </div>
  );
};
export { CarouselComponent };
