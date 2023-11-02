import './IdAlert.css'
import {LiaExclamationTriangleSolid} from 'react-icons/lia';

function PasswordAlert(){
    return (
        <>
        <div className="error-box">
        <div className="error-alert-container">
            <LiaExclamationTriangleSolid className="error-icon"/>
            <div className="error-msg">
              <p className="problem-text">There was a problem</p>
              <p className="error-text">we cannot find an account with that email address</p>
            </div>
        </div>
        </div>
        </>
    )
}
export {PasswordAlert};