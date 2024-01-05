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
      products: "-1",
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
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="نام ونام خانوادگی"
        />
        <input
          type="text"
          name="address"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="آدرس"
        />
        <input
          type="email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="ایمیل"
        />
        <input
          type="password"
          name="password"
          value={form.values.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="رمز عبور"
        />
        <input
          type="text"
          name="desc"
          value={form.values.desc}
          onChange={form.handleChange}
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
