import { useLayoutEffect, useState , useEffect} from "react";
import "./App.css";
import LandingPageSignout from "./Components/LandingPageSignout/LandingPageSignout.jsx";
import LandingPageSignIn from "./Components/LandingPageSignIn/LandingPageSignIn";
import VideoInfo from "./Components/VideoInfo/VideoInfo.jsx";
import { WatchList } from "./Components/WatchList/WatchList";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Footer from "./Components/Footer/Footer";
import CategorySelected from "./Components/CategorySelected/CategorySelected";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavbarforSignIn from "./Components/NavbarForSignIn/NavbarForSignIn";
import FooterForSignIn from "./Components/FooterforSignIn/FooterForSIgnIn";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import ComingSoon from "./Components/ComingSoon/ComingSoon"
import SearchPage from './Components/SearchPage/SearchPage'
import { PrimeBenefits } from "./Components/PrimeBenefits/PrimeBenefits";
import { SignInProvider } from "./Components/SignIn/SignInProvider";
import CategoryTypePage from "./Components/CategoryTypePage/CategoryTypePage";
import WatchListAll from "./Components/WatchList/WatchListAll"
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import { useScreenSize } from "./Components/useScreenSize";
import MobileNavBArContent from "./Components/MobileNavbar/MobileNavBArContent";
import SubscriptionPage from "./Components/SubscriptionPage/SubscriptionPage";
function App() {

  const [isNavBarShow, SetIsNavBarShow] = useState(true);

  const [mobileNavBar, setMobileNavBar] = useState(false);


  const NavBarControl = (value) => {
    console.log("value",value)

  if(value=="/home"){
    SetIsNavBarShow(true);
  } else if (value == "/SignIn" || value == "/SignUp" || value == "/SubscriptionPage" || value){
      SetIsNavBarShow(false);
  };
  }
  
  const handleMobileNavbar = (value) => {
    console.log("vl",value);
    setMobileNavBar(value);
  }  


const screenSize =   useScreenSize();

 let isMobile = screenSize < 880;


  return (
    <>
    {mobileNavBar==true && 
     <div className="mobileNavBarStyle">
        <MobileNavBArContent />
      </div>
    }
      {isNavBarShow && <NavbarforSignIn/>}
        
        

        {isMobile && isNavBarShow &&
        <div className={`${mobileNavBar ? 'active' : ''}`}>
          <MobileNavbar handleMobileNavbar={handleMobileNavbar}/>
        </div>
        }
      <Routes>
        {/* <LandingPageSignout /> */}

        <Route path="/" element={<LandingPageSignout/>} />
        {/* <LandingPageSignIn/> */}

        <Route path="/home" element={<LandingPageSignIn  NavBarControl={NavBarControl}   />} />
      
        <Route path="/SubscriptionPage" element={<SubscriptionPage NavBarControl={NavBarControl}/>}/>
        <Route path="/videodetails/:id" element={<VideoInfo NavBarControl={NavBarControl}/>} />
        <Route path="/CategorySelected" element={<CategorySelected/>} />
        {/* <Route path = "/Gridcards" element={<Gridcards/>}/> */}
        {/* <VideoInfo/> */}
        <Route
          path="/SignIn"
          element={<SignInProvider NavBarControl={NavBarControl}  />}
        />
        <Route path="/SearchPage" element={<SearchPage/>}/>
        <Route
          path="/SignUp"
          element={<SignUp NavBarControl={NavBarControl} />}
        />
        <Route path="/comingsoon" element={<ComingSoon/>}/>
        
        <Route path="/PrimeBenefits" element={<PrimeBenefits />} />
        <Route path="/Watchlist" element={<WatchList />} />
        {/* <SignIn/> */}
        {/* <CategoryPage/> */}
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route path="/categorytypepage" element={<CategoryTypePage/>} />
        <Route path="/WatchListAll" element={<WatchListAll/>}/>
      </Routes>
        {/* <Footer/> */}

   
    </>
  );
}

export default App;
