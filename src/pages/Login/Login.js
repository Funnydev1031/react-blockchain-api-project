import React from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar";
import { FiMail } from "react-icons/fi";
import { HiKey } from "react-icons/hi";
import google from "../../assets/icon/google.svg";
import loginImg from "../../assets/images/login.png";
import "../../assets/scss/login/login.scss";
// Oauth google login part
import { useGoogleLogin } from "react-google-login";

const clientId =
  "498758921859-o179v4o7ub530vdsjld75qjd2o1uf3li.apps.googleusercontent.com";

// refresh token
// import { refreshTokenSetup } from "./data/refreshToken";

// import users from "./data/users";
// import authService from "./service/authService";

const Login = () => {
  const navigate = useNavigate();

  const [account, setAccount] = React.useState({ email: "", password: "" });

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    navigate("/mynodes");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
    navigate("/");
  };

  const { signInGoogle } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    responseType: "code",
    prompt: "consent",
  });
  // const signInGoogle = () => {};

  // if (authService.isLoggedIn()) {
  //   // props.history.push("/home");
  // }
  // const isVarifiedUser = (email, password) => {
  //   console.log("email", email);
  //   return users.find(
  //     (user) => user.email === email && user.password === password
  //   );
  // };
  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
  };

  const handelLogin = () => {
    // if (isVarifiedUser(account.email, account.password)) {
    //   authService.doLogIn(account.email);
    //   setAccount({ email: "", password: "" });
    //   // props.history.push("/home");
    // }
  };
  return (
    <div className="login-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={loginImg} alt="log image" />
        </div>
        <div className="login-form">
          <h3 className="login-title">LOG IN</h3>
          <div className="input-box">
            <div className="icon">
              <FiMail />
            </div>
            <input
              name="email"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Email Address / User Name "
              onChange={(event) => handelAccount("email", event)}
            ></input>
          </div>
          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              name="password"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              onChange={(event) => handelAccount("password", event)}
              placeholder="password "
            ></input>
          </div>
          <div className="remember">
            <div className="remem">
              <input
                type="checkbox"
                className="remember_check"
                name="remember"
              />
              <span className="rememberMe"> Remember Me</span>
            </div>
            <span className="forgot">Forgot Password</span>
          </div>
          <button className="primaryBtn" onClick={handelLogin}>
            LOG IN
          </button>

          <button className="signInGoogle" onClick={signInGoogle}>
            <img src={google} />
            <div className="google-text">SIGN IN GOOGLE</div>
          </button>

          <div className="signupLink">
            <span className="ask">DON'T HAVE AN ACCOUNT?</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
