import React from "react";
import { useFormik } from "formik";

import "./App.css";

export default function App() {
  const form = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      desc: "",
      product: "-1",
      check: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <p className="form-title">لطفا فرم زیر را کامل کنید</p>

      <main>
        <input
          type="text"
          name="phone"
          onChange={form.handleChange}
          value={form.values.phone}
          onBlur={form.handleBlur}
          placeholder="شماره تماس"
        />
        <input
          type="text"
          name="name"
          onChange={form.handleChange}
          value={form.values.name}
          onBlur={form.handleBlur}
          placeholder="نام و نام خانوادگی"
        />

        <input
          type="text"
          name="address"
          onChange={form.handleChange}
          value={form.values.address}
          onBlur={form.handleBlur}
          placeholder="ادرس"
        />

        <input
          type="email"
          name="email"
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
          placeholder="ایمیل"
        />
        <input
          type="password"
          name="password"
          onChange={form.handleChange}
          value={form.values.password}
          onBlur={form.handleBlur}
          placeholder="رمز عبور"
        />
        <input
          type="text"
          name="desc"
          onChange={form.handleChange}
          value={form.values.desc}
          onBlur={form.handleBlur}
          placeholder="توضیحات"
        />
      </main>

      <section>
        <select
          name="product"
          onChange={form.handleChange}
          id="selectBox"
          defaultValue="-1"
        >
          <option value="-1">محصول خود را انتخاب کنید</option>
          <option value="kif">کیف</option>
          <option value="kafsh">کفش</option>
          <option value="kamarband">کمربند</option>
        </select>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={form.values.check}
          name="check"
          onChange={form.handleChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          قوانین و مقررات و میپذیرم
        </label>
      </section>

      <button type="submit">ارسال</button>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </form>
  );
}
