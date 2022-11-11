import React from "react";
import { SmallLoginWrapper } from "../../Style/loginsmall";

const LoginSmall = () => {
  return (
    <SmallLoginWrapper>
        <div className="small-signup-main-div">
            <h1>Register for free to apply for jobs</h1>
            <p>5 Lakh+ recruiters are looking for candidates on Naukri</p>
      <div class="form-floating mb-5">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      </div>
    </SmallLoginWrapper>
  );
};

export default LoginSmall;
