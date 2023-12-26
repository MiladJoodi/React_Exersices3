import React, { useState } from "react";

import "./App.css";
import axios from "axios";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true)

  const registerHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://logicalloss.backendless.app/api/data/signup1", {
        data: {
          email,
          password,
        },
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("ثبت نام با موفقیت انجام شد");
        }
      });
  };

  const checkHandler = (event)=>{
    event.preventDefault();
    
    setCheck(!check)
    console.log(check);
  }

  return (

	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">

				{/* <div class="login100-more" style="background-image: url('images/bg-01.jpg');"> */}
				<div class="login100-more bg-01">
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-43">
						اطلاعات خود را وارد کنید
					</span>
					
					
					<div class="wrap-input100 validate-input " data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
						<span class="focus-input100"></span>
						<span class="label-input100 font-ganj">ایمیل</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
						<span class="focus-input100"></span>
						<span class="label-input100">رمز عبور</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<button onClick={checkHandler}>
              <label class={`label-checkbox100 ${check ? 'check' : ''}`} for="ckb1">
								اطلاعاتتان را ذخیره کنیم؟
							</label>
							<input class="input-checkbox100" id="ckb1" type="rad" name="remember-me" />
            
              </button>
              </div>

						<div>
							<a href="#" class="txt1">
								رمزتان را فراموش کرده اید؟
							</a>
						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={registerHandler}>
							 ثبت نام
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							ورود با
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="https://github.com/Miladjoodi/" class="login100-form-social-item flex-c-m bg-github-icon m-r-5">
							<i class="fa-brands fa-github" aria-hidden="true"></i>
						</a>

            <a href="https://www.facebook.com/miladjood/" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa-brands fa-google" aria-hidden="true"></i>
						</a>
					</div>
				</form>


			</div>
		</div>
	</div>
  );
}
