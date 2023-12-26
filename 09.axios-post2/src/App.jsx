import React, { useState } from "react";

import "./App.css";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://react20libs-default-rtdb.firebaseio.com/users.json", {
        data: {
          name,
          email,
        },
        headers: {
          // Codes
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("ثبت نام با موفقیت انجام شد");
        }
      });
  };

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
						<input class="input100" type="text" name="email" />
						<span class="focus-input100"></span>
						<span class="label-input100 font-ganj">ایمیل</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" />
						<span class="focus-input100"></span>
						<span class="label-input100">رمز عبور</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<label class="label-checkbox100" for="ckb1">
								اطلاعاتتان را ذخیره کنیم؟
							</label>
							<input class="input-checkbox100" id="ckb1" type="rad" name="remember-me" />
            </div>

						<div>
							<a href="#" class="txt1">
								رمزتان را فراموش کرده اید؟
							</a>
						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							 ورود
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>


			</div>
		</div>
	</div>
  );
}
