import { movieList } from "../ApiFetch";
import { useState, useEffect } from "react";
import TopCarousel from "../LandingPageSignIn/TopCarousel/TopCarousel";
import { useLocation } from "react-router-dom";
import { categories } from "../CategoryConstants";

import "./CategoryTypePage.css";
import { CarouselComponent } from "../Carousel/Carousel";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";

function CategoryTypePage() {
  const { search } = useLocation();
  console.log("search", search);
  const params = new URLSearchParams(search);
  const type = params.get("type");
  const typeHeader = type.charAt(0).toUpperCase() + type.slice(1);
  console.log("par", typeHeader);

  const [moviesInfo, setMoviesInfo] = useState([]);
  const [categoryMovieInfo, setCategoryMovieInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieList();
        let filteredMovieList = [];

        setMoviesInfo(
          data.data.map((item) => {
            if (item.type === type) {
              filteredMovieList.push(item);
            }
          })
        );

        // Create an object to store items by keyword
        const itemsByKeyword = {};

        // Loop through each item and organize them by keywords
        filteredMovieList.forEach((item) => {
          item.keywords.forEach((keyword) => {
            if (!itemsByKeyword[keyword]) {
              itemsByKeyword[keyword] = [item];
            } else {
              itemsByKeyword[keyword].push(item);
            }
          });
        });
        setCategoryMovieInfo(itemsByKeyword);

        console.log(Object.keys(itemsByKeyword));

        setMoviesInfo(filteredMovieList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [type]);

    console.log("path",location.pathname)
  
    console.log("cmi",categoryMovieInfo);
  return (
    <>
      <div style={{ backgroundColor: "#00050d", paddingBottom: "300px" }}>
        <div className="categorytypeheader">{typeHeader}</div>
        <TopCarousel moviesInfo={moviesInfo} />

        {Object.keys(categoryMovieInfo).map((keyword) => {
          const moviesInfo = categoryMovieInfo[keyword];
          return <CarouselComponent moviesInfo={moviesInfo} type={keyword} />;
        })}
      </div>
      <FooterForSignIn style={{ backgroundColor: "#00050d" }} />
    </>
  );
}
export default CategoryTypePage;
