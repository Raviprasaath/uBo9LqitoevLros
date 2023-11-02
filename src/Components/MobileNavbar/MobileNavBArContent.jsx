import "./MobileNavbarContent.css";

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

import "./MobileNavbarContent.css";
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

const MobileNavBArContent = () => {
  return (
    <>
      <div className="menu-content" style={{ backgroundColor: "#191e25" }}>
        {/* HOME CONTENT */}

        <div className="home-content">
          <GoHome className="home-icon" />
          <span> Home</span>
        </div>

        {/* STORE CONTENT */}

        <div className="store-content">
          <BiShoppingBag className="store-icon" />
          <span>Store</span>
        </div>

        {/* LIVE TV CONTENT */}

        <div className="livetv-content">
          <PiTelevisionSimpleBold className="menu-icon" />

          <span>Live TV</span>
        </div>

        {/* CATEGORIES CONTENT */}

        <div className="categories-content">
          {/* ACCORDION */}
          <Accordion alwaysOpen={true}>
            <AccordionItem>
              {({ open }) => (
                <>
                  <AccordionHeader>
                    <div className="categories-content">
                      <div className="categories-content-header">
                        <LuLayoutGrid className="category-icon" />
                        <span> Categories</span>
                        <FontAwesomeIcon
                          icon={open ? faAngleUp : faAngleDown}
                          className={classNames("icon", { open: open })}
                          style={{ marginLeft: "10px", color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </AccordionHeader>

                  <AccordionBody>
                    {/* item 1 */}

                    <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="acc-sub-head">
                            <h3>Genres</h3>
                            <FontAwesomeIcon
                              icon={!open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open: open })}
                              style={{
                                marginLeft: "10px",
                                color: "#aaa",
                                paddingTop: "3px",
                              }}
                            />
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                              {categories.map((category) => (
                                <p>{category}</p>
                              ))}
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>

                    {/* item 2 */}
                    <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="acc-sub-head">
                            <h3 className={`accordion-title`}>Types</h3>
                            <FontAwesomeIcon
                              icon={!open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open: open })}
                              style={{
                                marginLeft: "10px",
                                color: "#aaa",
                                paddingTop: "3px",
                              }}
                            />
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                              {types.map((type) => (
                                <p>{type}</p>
                              ))}
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
                  </AccordionBody>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>

        {/* STUFF CONTENT */}
        <div className="stuff-content">
          <PiFolderPlusDuotone className="stuff-icon" />
          <span>My Stuff</span>
        </div>
      </div>
    </>
  );
};

export default MobileNavBArContent;
