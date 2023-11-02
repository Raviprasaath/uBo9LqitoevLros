import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../Carousel/Carousel.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import {FaChevronRight} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { Link, useLocation } from "react-router-dom";
import { addtoWatchlist } from "../../WatchList/WatchlistService";
import { useState } from "react";

function CardsCarousel({ moviesInfo, type }) {
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

  const navigate = useNavigate();

  const [isWatchListClicked, setIsWatchListClicked] = useState(false);

  const addMovieToWatchList = (movie) => {
    if (localStorage.getItem("userInfo")) {
      addtoWatchlist(movie._id)
        .then((response) => {
          console.log("repo", response);
          // setIsLoaded(false);
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
      <div className="Carousel-header">
        <div className="Carousel-header-prime">Prime</div>
        {type}
        <Link to="/Gridcards">
        <div className="see-more-container">
          <p>See more</p>
            < FaChevronRight className="right-arrow"/>
        </div>
        </Link>
      </div>
      <Carousel
        className="cards-carousel"
        responsive={responsive}
        showDots={true}
        centerMode={true}
        renderButtonGroupOutside={true}
      >
        {moviesInfo &&
          moviesInfo
            .filter((item) => item.type === `${type}`)
            .map((item, index) => (
              
              <div className="card-items" key={item._id}>
                <Link
                  key={`${item._id}&${index}`}
                  to={`/videodetails/${item._id}`}
                >
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
                        onClick={() => {
                          addMovieToWatchList(item);
                        }}
                        id="watchlist-icon-button"
                      >
                        {/* {!isWatchListClicked &&  <FiPlus id="plus-icon" />}
                        {isWatchListClicked &&  <BiCheck id="check-icon" />}  */}
                        <FiPlus id="plus-icon" />
                      </button>

                      <span className="watchlist-tooltip">Watchlist</span>
                      <Link
                  key={`${item._id}&${index}`}
                  to={`/videodetails/${item._id}`}
                >
                      <button id="more-icon-button">
                        <BsThreeDotsVertical id="threedots-icon" />
                      </button>
                      <span className="more-tooltip">More</span>
                      </Link>

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
      ;
    </>
  );
}
export default CardsCarousel;
