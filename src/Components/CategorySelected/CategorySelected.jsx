import "./CategorySelected.css";
import { useState, useEffect } from "react";
import { getDetailsByTypeOrCategory } from "./CategorySelectedService";
import { categories, types } from "../CategoryConstants";
import { CarouselComponent } from "../Carousel/Carousel";
import { useLocation } from "react-router-dom";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";

function CategorySelected() {

  const { search } = useLocation();
  console.log("search",search)
  const params = new URLSearchParams(search);
  const key = params.get("key");
  const value = params.get("value");

  const [resultdata, setResultData] = useState([]); 
  const [selectedType, setSelectedType] = useState("All");


  useEffect(() => {
    getDetailsByTypeOrCategory(key, value).then((res) => {
      const groups = {};
      const movieInfo = res.data.data;

      types.forEach((type) => {
        groups[type] = movieInfo.filter(
          (movie) =>movie.type == type.toLowerCase()
        );
      });
      console.log("groups",groups);
      setResultData(groups);
    });
  }, [value]);

  return (
    <>
    < div style={{backgroundColor:"#00050d", paddingBottom:"300px"}}>
    <div className="value-header">{value}</div>
      <div className="filter-btn-container">
        <button onClick={() => setSelectedType("All")} className="filter-btn">
          All
        </button>
        {types.map((type) => (
          <button onClick={() => setSelectedType(type)} className="filter-btn">
            {type}
          </button>
        ))}
      </div>
      <div>
        {selectedType == "All" ? (
          Object.keys(resultdata).map((type) => {
            return (
              <CarouselComponent moviesInfo={resultdata[type]} type={type}/>
            );
          })
        ) : (
          <CarouselComponent
            moviesInfo={resultdata[selectedType]}
            type={selectedType}
          />
        )}
      </div>

    </div>
      <FooterForSignIn />
    </>
  );
}
export default CategorySelected;
