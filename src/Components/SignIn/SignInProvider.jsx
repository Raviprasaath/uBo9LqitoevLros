import React, { useState } from "react";
import SignIn from "./SignIn";
export const UserContext = React.createContext(null);

function SignInProvider(props) {

  const [username, setUsername] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const context = {
    username,
    setUsername,
    status,
    setStatus,
    
  };

  return (
    <>
      <UserContext.Provider value={context}>
        <SignIn NavBarControl={props.NavBarControl}/>
      </UserContext.Provider>
    </>
  );
}
export { SignInProvider};
