import { Link } from "react-router-dom";
import "./FrontpagecardsSignout.css";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function FrontpagecardsSignOut() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      setIsLoggedIn(true);
    }
  },[])

  console.log("login",isLoggedIn);

  return (
    <>
    {/* top two cards */}
      <div className="container-1">
        <div className="Signoutposter-1">
          <img
            src="src/assets/LandingPageSignoutimages/landingpagesignoutposter-1.jpg"
            alt="image-1"
          />
          <div className="Ad-1">
            <div className="heading-1">
              <h1>Welcome to Prime Video</h1>
            </div>
            <p>
              Watch the latest movies, TV shows, and award-winning Amazon
              Originals
            </p>
              {
                isLoggedIn?(
                  <Link to='SubscriptionPage'>
                    <button>
                  Join prime
                 </button>
              </Link>
                ):(
                  <Link to='SignIn'>
                  <button>
                  Sign In to Join prime
               </button>
            </Link>
                )
              }
          </div>
        </div>

        <div className="Signoutposter-2">
          <img
            src="src/assets/LandingPageSignoutimages/landingpagesignoutposter-2.jpg"
            alt="image-2"
          />
          <div className="Ad-2">
            <div className="heading-2">
              <h1>Movie rentals on Prime Video</h1>
            </div>
            <p>Early access to new movies,before digital subscription</p>
            <button>Rent now</button>
          </div>
        </div>
      </div>
        {/* grid cards */}
      <div className="secondDiv">
        <div className="secondDiv-content">
          <p className="yourfavouritediv">
            Your favorite channels all in one place
          </p>
          <p className="firstptag">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="gridcontainer">
          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/LionsgatePlay.jpg"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Discovery.jpg"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Erosnow.jpg" alt="" />
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/MANORAMAMAX.jpg" alt="image-3" />
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/hoichoi.jpg"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Vrott.png"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Amc.png" alt="" />
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Docubay.jpg"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Mubi.jpg"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/iWonder.png"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Stingray.png"></img>
          </div>

          <div className="grid-item">
            <img src="src/assets/LandingPageSignoutimages/Curiosity.png"></img>
          </div>
        </div>
      </div>
      {/* bottom two cards */}
      <div className="container-2">
        <div className="Signoutposter-3">
          <img
            src="src/assets/LandingPageSignoutimages/amazonromote.jpg"
            alt=""
          />
          <div className="Ad-3">
            <div className="heading-3">
              <h2>Even better with Fire TV Stick</h2>
            </div>
            <p>
            The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote 
            and say the name of the title you want to watch to find it in seconds.
            </p>
            <button className="getStarted">Get Started</button>
          </div>
        </div>

        <div className="Signoutposter-4">
          <img
            src="src/assets/LandingPageSignoutimages/amazoncartoon.jpg"
            alt=""
          />
          <div className="Ad-4">
            <div className="heading-4">
              <h1>Family Friendly</h1>
            </div>
            <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
              </p>
            <button className="getStarted">Get started</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FrontpagecardsSignOut;
