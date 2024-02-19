import { useState } from "react";

function LoginSignUp() {
    const [state, setState] = useState("Sign up");
    return (
        <div className="container">
            <div className="header">
                <div className="purpose">{state}</div>
                <div className="line"></div>
            </div>
            <div className="body">
                {state === "Login" ? (
                    <div></div>
                ) : (
                    <div className="input">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name" />
                    </div>
                )}
                <div className="input">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <i class="fa-solid fa-lock"></i>
                    <input type="text" placeholder="Password" />
                </div>
            </div>
            <div className="footer">
                {state === "Login" ? (
                    <a href="/">Forgot your password?</a>
                ) : (
                    <div></div>
                )}
                <div className="login-signup-btn">
                    <div
                        className={
                            state === "Sign up"
                                ? "loginsignUpBtn-grey"
                                : "loginsignUpBtn"
                        }
                        onClick={() => {
                            setState("Login");
                        }}
                    >
                        LOGIN
                    </div>
                    <div
                        className={
                            state === "Sign up"
                                ? "loginsignUpBtn"
                                : "loginsignUpBtn-grey"
                        }
                        onClick={() => {
                            setState("Sign up");
                        }}
                    >
                        SIGN UP
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
