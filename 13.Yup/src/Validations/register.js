import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "اسم حداقل باید 3 کارکتر باشد")
    .max(12, 'اسم حداکثر باید 12 کاراکتر باشد')
    .required(),
    email: Yup.string()
    .email()
    .min(10, "ایمیل می تواند حداکثر 30 کاراکتر باشد")
    .max(30,"ایمیل حداکثر باید 30 کاراکتر داشته باشد")
    .required(" لطفاً ایمیل را وارد کنید")
})

export default registerSchema;