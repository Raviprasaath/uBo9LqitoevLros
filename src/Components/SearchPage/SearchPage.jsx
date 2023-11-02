import "./Searchpage.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { types, categories } from "../CategoryConstants";
import { Gridcards } from "../Gridcards/Gridcards";
import {searchSuggestionResults} from "./SearchPageService"


function SearchPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    setSearchResults(location.state.data);
  }, [location]);


  console.log("searchresult",searchResults);

  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);

  function handleGenreDisplay() {
    setIsOpenGenre(!isOpenGenre);
  }

  function handleTypeDisplay() {
    setIsOpenType(!isOpenType);
  }



  return (
    <>
      <div
        className="search-page-container"
        style={{ backgroundColor: "#00050d" }}
      >
        <div className="search-page-btn-container">
          <div className="search-btn-container">
            <button
              onClick={handleGenreDisplay}
              className={`search-filter-btn ${isOpenGenre ? "br" : ""}`}
            >
              Genre
              <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
            </button>
            <div className={`genre-container ${isOpenGenre ? "open" : ""}`}>
              <ul className="category-items">
                {categories.map((category) => (
                  <li key={category} id="category">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="search-btn-container">
            <button
              onClick={handleTypeDisplay}
              className={`search-filter-btn ${isOpenType ? "br" : ""}`}
            >
              Content type
              <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
            </button>

            <div
              className={`content-type-container ${isOpenType ? "open" : ""}`}
            >
              <ul className="content-type-items">
                {types.map((type) => (
                  <li key={type} id="type">
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Gridcards cardsInfo={searchResults} />
      </div>
    </>
  );
}
export default SearchPage;
