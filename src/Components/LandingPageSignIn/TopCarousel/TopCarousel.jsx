import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import "./TopCarousel.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import {BiCheck} from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
// import { movieList } from "../../ApiFetch";
import { addtoWatchlist } from "../../WatchList/WatchlistService";

import { Link } from "react-router-dom";
import 'animate.css';

function TopCarousel(props) {

  const  {moviesInfo} = props;
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter:100,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };
  // const [showImage, setShowImage] = useState(true);
  // const [showVideo, setShowVideo] = useState(false);
  // const [moviesInfo, setMoviesInfo] = useState([]);

  // useEffect(() => {
  //   const imageTimeout = setTimeout(() => {
  //     setShowImage(false);
  //     setShowVideo(true);
  //   }, 5000);

  //   return () => clearTimeout(imageTimeout);
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await movieList();
  //       setMoviesInfo(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const navigate = useNavigate();
  // const [isWatchListClicked, setIsWatchListClicked] = useState(false);

  const [isItemAdded,setIsItemAdded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
    }
  }, []);


  const addMovieToWatchList = (movie,event) =>{

      event.preventDefault();
    if (localStorage.getItem("userInfo")) {
      setIsItemAdded(prevIsItemAdded => !prevIsItemAdded);

      addtoWatchlist(movie._id)
        .then((response) => {
          console.log("repo", response);
          // setIsLoaded(false);
        console.log("logged in!!!")

        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      navigate("/SignIn");
      }
  };


  return (
    <>
      <div className="App">
        <Carousel
          responsive={responsive}
          showDots={true}
          // centerMode={true}
          partialVisible={true}
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          autoPlay={false}
          infinite={true}
          autoPlaySpeed={3000}
        >
          {/* item-1 */}
          {moviesInfo &&
            moviesInfo.slice(0, 10)
            .map((item, index) => (
              <Link key={`${item._id}&${index}`} to={`/videodetails/${item._id}`}>
              <div className="poster-items">
                <div className="poster-content ">
                  <div className="poster-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="prime-details">
                    <img src={bluetick} alt="" />
                    <p>Included with Prime</p>
                  </div>
                  <div className="poster-buttons">
                    <div className="poster-button-play">
                      <button className="play">
                        <BiSolidRightArrow className="play-arrow-icon" />
                      </button>
                      <p>Play</p>
                      <div className="poster-icons">
                        <button 
                         onClick={(event) => {
                          addMovieToWatchList(item,event);
                        }}
                        className="watchList poster-icons-button">
                           {!isItemAdded?(<FiPlus  className="plus"/>) :(<BiCheck className="plus" />)}
                        </button>
                        <span className="poster-watchlist-tooltip">Watchlist</span>
                        <Link
                  key={`${item._id}&${index}`}
                  to={`/videodetails/${item._id}`}
                >
                        <button className="details poster-icons-button">
                          <BiInfoCircle className="info" />
                        </button>
                        <span className="poster-details-tooltip">Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
                <img 
                // src={item.thumbnail}
                src={"https://i.pinimg.com/originals/17/c5/6b/17c56b759c8b2e9a95cfcd70e9878b72.jpg"}

                 alt="" />
              </div>
              </Link>
            ))}
            {/* <div
      className={`media ${showImage ? "show" : ""}`}
      style={{ display: showImage ? "block" : "none" }}
    >
      <img src={item.thumbnail} alt="Image" />
    </div>

    <div
      className={`media ${showVideo ? "show" : ""}`}
      style={{ display: showVideo ? "block" : "none" }}
    >
      {showVideo && (
        <Video autoPlay muted loop controls>
          <source src={item.video_url} type="video/mp4" />
        </Video>
      )}
    </div> */}

       
        </Carousel>
      </div>
    </>
  );
}
export default TopCarousel;