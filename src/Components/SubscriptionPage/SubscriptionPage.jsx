import { useEffect } from "react";
import "./SubscriptionPage.css"
import { useLocation } from "react-router-dom";
function SubscriptionPage(props){
    const location  = useLocation();

    console.log("locatin",location.pathname);
   const {NavBarControl} = props;
    useEffect(()=>{
        NavBarControl(location.pathname);
    },[])
    return(
        <>
        {/* prime container */}
        <div className="mb-prime-top-container">
            <img src="src/assets/loginassets/blueprime.png" alt="" />
        </div>
        {/* prime plan container */}
        <div className="mb-prime-plan-container">
            <strong className="mb-prime-plan">
                Choose a Prime plan,
            </strong>
            <span className="mb-prime-plan-normal">
                Change or cancel anytime
            </span>
        </div>
        {/* box container */}
        <div className="mb-box-container">
            <div className="mb-box-1">
                <p>Prime</p>
            </div>
            <div className="mb-box-2">
            <p>Prime Video</p>
            <p>Mobile</p>
            <p>Edition</p>
                </div>
        </div>
        </>
    )
}
export default SubscriptionPage;