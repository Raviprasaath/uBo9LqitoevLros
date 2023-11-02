import './ComingSoon.css'
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";

function ComingSoon(){
    return(
        <div className="comingsoonhome">
            <div className="eyesloader">
        <span class="eyes"></span>
        <span class="eyes"></span>
            </div>

<div className="tag-container">


{/* Streaming Sensation */}
<div className="tag">
            <h4>
            Streaming Sensation.
                </h4>
            </div>
            <div className="tag">
            <h3>
            Don't Blink, You Might Miss It.
                </h3>
            </div>
            <div className="tag">
            <h2>
            Stay Tuned for Blockbuster Bliss.
            </h2>
           </div>
           <div className="tag">
            <h1>
            Coming Soon to Prime Video.
            </h1>
</div>
           </div>

        <div className="comingsooncontainer">
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>

        </div>
            <div className="text-container">
                {/* Coming Soon to Prime Video */}
               {/* <p>
               Coming Soon !!
                </p> */}
                </div>
        {/* <div className="text-container">
            Coming Soon!!!!
        </div> */}
      {/* <FooterForSignIn/> */}

        </div>
    )
}
export default ComingSoon;