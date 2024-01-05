// import { object, string } from 'yup'
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "اسم حداقل باید 3 کاراکتر داشته باشه")
    .max(12, "اسم حداکثر باید 12 کاراکتر داشته باشه")
    .required("اسم را وارد نمایید"),
  email: Yup.string()
    .email("ایمیل وارد شده معتبر نمی‌باشد")
    .min(10, "ایمیل حداقل باید 10 کاراکتر داشته باشه")
    .max(30, "ایمیل حداکثر باید 30 کاراکتر داشته باشه")
    .required("ایمیل را وارد نمایید"),
});

export default registerSchema;
