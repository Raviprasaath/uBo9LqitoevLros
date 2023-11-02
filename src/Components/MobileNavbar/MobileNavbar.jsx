import "./MobileNavbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { categories,types } from "../CategoryConstants";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {PiFolderPlusDuotone} from "react-icons/pi"
import { LuLayoutGrid } from "react-icons/lu";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import { GoHome } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { movieTitles } from "../commons/movieList";

function MobileNavbar( { handleMobileNavbar } ) {
  
  const [arrowRotate, setArrowRotate] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [movieResult, setMovieResult] = useState([]);

  const toggleSearchBar = () => {
    setIsOpen((prevIsopen) => !prevIsopen);
  };

  const arrowHandler = () => {
    setArrowRotate((prevRotate) => !prevRotate);
    // handleMobileNavbar(arrowRotate);
  };

  const searchMovie = (event) => {
    const input = event.target.value;
    if (input.length === 2) {
    const result =  movieTitles.filter((movieTitle)=>movieTitle.toLowerCase().includes(input.toLowerCase()))
    .slice(0,10);
      
      setMovieResult(result);
      console.log("rs", result);
    } else if (input.length == 0) {
      setMovieResult([]);
    }
  };

  const clearValue = () => {
    setMovieResult([]);
    const inputField = document.querySelector(".search-input");
    if (inputField) {
      inputField.value = "";
    }
  };
  // get data from local storage
  let storedValue = [];
  const [userName, setUserName] = useState(" ");
  const [idLogged, setIdLogged] = useState(false);
  console.log("ar", arrowRotate);
  handleMobileNavbar(arrowRotate);

  return (
    <>
      <div
        className="mb-navbar-container"
        style={{ backgroundColor: "#00050d" }}
      >
        <div
          className="mb-menu-container"
          style={{ background:arrowRotate? "#191e25" : "initial" }}
          onClick={arrowHandler}
        >
          <p>Menu</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`mb-arrow-icon ${arrowRotate ? "rotate" : ""}`}
          />
          {/* MENU BAR CONTAINER */}
        </div>

        {/* {arrowRotate && (
          
        )} */}






        <div className="mb-prime-container">prime video</div>
        {/* SEARCH CONTAINER */}

        <div className="mb-search-container">
          <div
            onClick={toggleSearchBar}
            className="navbar-icons-item hover-down-search"
            style={{ background: isOpen ? "#191e25" : "initial" }}
          >
            {isOpen ? (
              <AiOutlineClose className="close-icon" />
            ) : (
              <BiSearch className="search-icon" />
            )}
          </div>

          {/* SEARCH BAR RESULT */}
          <div className={`search-bar-container ${isOpen ? "open" : ""}`}>
            <div className="search-bar">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon-small"
              />
              <input
                onChange={searchMovie}
                type="text"
                className="search-input"
                placeholder="Search"
              />
              <div className="clear-btn-container">
                <button onClick={clearValue} className="clear-btn">
                  {" "}
                  clear
                </button>
              </div>
            </div>
            <div className="search-results">
              {movieResult.map((item) => (
                <Link
                  to="/SearchPage"
                  state={{ data: movieResult }}
                  style={{ color: "#fff" }}
                >
                  <div className="search-result">
                    <p>{item}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-user-logo">
            <img
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNavbar;
