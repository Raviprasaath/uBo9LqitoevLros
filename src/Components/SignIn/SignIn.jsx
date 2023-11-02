import React, { useState, useEffect, useContext, useRef } from "react";
import "./SignIn.css";
import { SiPrimevideo } from "react-icons/si";
import logo from "../../assets/loginassets/primevideoLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaExclamationTriangleSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";
import { IdAlert } from "./IdAlert";
import { UserContext } from "./SignInProvider";
import { login } from "./SigninService";

const PHONE_NUMBER_EXPRESSION =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const EMAIL_EXPRESSION =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const SignIn = (props) => {
  const location = useLocation();

  const { NavBarControl } = props;

  const formRef = useRef();

  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);
  console.log("locat",location.pathname);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  console.log("params", params);
  const key = params.get("status");
  console.log("key", key);
  const user = useContext(UserContext);

  const [hasCompletedFirstStep, setHasCompletedFirstStep] = useState(false);
  const [usernameType, setUsernameType] = useState(null);
  const [errormessage, setErrorMessage] = useState(" ");
  useEffect(() => {
    if (key === null) {
      setHasCompletedFirstStep(false);
    }
  }, [key]);
  const navigate = useNavigate();

  const navigateToValidation = (event) => {
    let username = undefined;
    let password = undefined;
    if (!hasCompletedFirstStep) {
      username = event.target[0].value;
    } else {
      password = event.target[0].value;
    }

    event.preventDefault();

    let idInfo=[];
    if (user.status === undefined && user.username === undefined) {
      const usernameTypeForValidation = isNaN(username)
        ? "email"
        : "phone number";
      setUsernameType(usernameTypeForValidation);
      const isValidUsername =
        usernameTypeForValidation === "email"
          ? EMAIL_EXPRESSION.test(username)
          : PHONE_NUMBER_EXPRESSION.test(username);
      if (isValidUsername) {
        user.setUsername(username);
        user.setStatus("usernameCompleted");
        navigate("/SignIn?status=completed");
        setHasCompletedFirstStep(true);
        SetErrorAlert(false);
      } else {
        SetErrorAlert(true);
        setErrorMessage("Enter your email or mobile number");
      }
    } else if (user.username !== undefined) {
      login(user.username, password)
        .then((response) => {
          idInfo.push(response.data.token);
          idInfo.push(response.data.data);
          localStorage.setItem("userInfo", JSON.stringify(idInfo));
          console.log("idinfo",idInfo)
          navigate("/");
        })
        .catch((error) => {
          console.log("err", error.response.data.message);
          setErrorMessage(error.response.data.message);
          SetErrorAlert(true);
          setLoginFailed(true);
        });
    }
  };

  const [errorAlert, SetErrorAlert] = useState(false);
  const [loginFailed, setLoginFailed] = useState(undefined);

  return (
    <div className="SignContainer">
      {/* prime logo */}

      <div className="primevideoblackIcon">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="SignInimg"
        />
      </div>

      {/* error alert */}

      {errorAlert && (
        <IdAlert
          isLoginSuccess={loginFailed}
          usernameType={usernameType}
          errormessage={errormessage}
        />
      )}

      {/* prime form */}
      <div className="login-parent">
        <div className="loginpageformContainer">
          <form
            ref={formRef}
            className="loginpageform"
            onSubmit={navigateToValidation}
          >
            <p className="formtitle">Sign in</p>

            {/* email input */}
            {!hasCompletedFirstStep && (
              <div className="emailinput">
                <label>Email or mobile phone number</label>
                <input
                  type="text"
                  placeholder="Enter your email or mobile phone"
                />
              </div>
            )}
            {user.status !== undefined && hasCompletedFirstStep && (
              <div>
                <div className="id-creds">
                  <p>{user.username}</p>
                  <Link className="anchor-tag" to="">
                    Change
                  </Link>
                </div>
                <div className="passwordinput">
                  <div className="passwordtitle">
                    <label>Password</label>
                    <Link className="anchor-tag" to="">
                      Forgot your Password?
                    </Link>
                  </div>
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>
            )}
            <div className="formsubmitBtn">
              <button type="submit">Continue</button>
            </div>
          </form>

          {user.status === undefined && !hasCompletedFirstStep && (
            <div className="termsandCons">
              <p>
                By continuing, you agree to Amazon's{" "}
                <Link
                  onClick={() =>
                    alert(
                      "The Page your Re-Directing is not a source of prime video Clone."
                    )
                  }
                  to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
                >
                  Conditions of Use
                </Link>{" "}
                and{" "}
                <Link
                  onClick={() =>
                    alert(
                      "The Page your Re-Directing is not a source of prime video Clone."
                    )
                  }
                  to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </div>
          )}
          {/* <div className="checkboxverify">
            <input type="checkbox"></input>
            <p>
              Keep me signed in. <Link className="anchor-tag">
                Details
              </Link>{" "}
              <RxTriangleDown />
            </p>
          </div> */}
          {user.status === undefined && !hasCompletedFirstStep && (
            <div>
              <div className="newformtitle">
                <p>New to Amazon?</p>
              </div>
              <div className="newformbutton">
                <Link to={"/SignUp"}>
                  <button>Create your Amazon account</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* footer */}
        <div className="loginpagefooter">
          <div className="loginpagesupport">
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
            >
              Terms and Privacy Notice
            </Link>
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
            >
              Send us feedback
            </Link>
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/help"
            >
              Help
            </Link>
          </div>
          <div className="loginpagecopyright">
            &copy; 1996-2023, AmazonClone.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;