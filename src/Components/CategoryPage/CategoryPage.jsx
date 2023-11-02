import "./CategoryPage.css";

import bluebg from "../../assets/categorypageAssets/bluebackground.webp";
import card_1 from "../../assets/categorypageAssets/categorycard_1.webp";

import {categories,types} from '../CategoryConstants'
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import NavbarforSignIn from "../NavbarForSignIn/NavbarForSignIn";
import { Link } from "react-router-dom";
function CategoryPage() {
  

  return (
  <div style={{backgroundColor:"#00050d"}} >
      {/* <--- CATEGORY SECTION --->  */}
      <div className="category-header">Categories</div>
      <div className="genres-section">
        <h2 className="genres-header">Genres</h2>
        <div className="genres-container">
          {categories.map((category) => (
             <Link className="link" to={`/CategorySelected?value=${category}&key=keywords`}>
            <div className="genres-card">
                <img src={card_1} alt="" />
              {/* <Link className="link" to={`/home?value=${category}&key=keywords`}>{category}</Link> */}
             <span className="link">{category}</span>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <--- TYPE SECTION --->  */}
      <div className="types-section">
        <h2 className="types-header">Types</h2>

        <div className="types-container">
          {types.map((types)=>(
          // <Link className="link" to={`/CategorySelected?value=${types}&key=type`}>
          <Link to={`/categorytypepage?type=${types}`}>
          <div className="type-card">
            <img src={bluebg} alt="" />
            <span>{types}</span>
          </div>
          </Link>
          ))}
         
        </div>
      </div>

      <FooterForSignIn />
    </div>
  );
}
export default CategoryPage;
