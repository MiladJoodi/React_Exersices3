import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name: Yup.string().min(3).max(12).required(),
    email: Yup.string().email().min(10).max(30).required()
})

export default registerSchema;