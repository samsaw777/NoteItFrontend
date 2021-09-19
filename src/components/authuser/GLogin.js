import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { glogin } from "../../actions/authtype";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function GLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  let userback = useSelector((state) => state.auth.user);
  const responseGoogle = async (response) => {
    // const data = { tokenId: response.tokenId };
    // console.log(data);
    const token = response.tokenId;
    dispatch(glogin(token));
  };
  useEffect(() => {
    if (Object.keys(userback).length !== 0) {
      toast.success("Logged In Sucessfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/landing");
    }
  }, [userback]);
  return (
    <GoogleLogin
      className="w-full mt-4 rounded"
      clientId="400731109120-o34mbbet9ni92eip3p1qog3ef0n64auo.apps.googleusercontent.com"
      buttonText="Login With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GLogin;

/* 
auth client id:-
400731109120-o34mbbet9ni92eip3p1qog3ef0n64auo.apps.googleusercontent.com

*/
