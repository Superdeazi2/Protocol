import { useState } from 'react'
import { NavLink, useNavigate } from '../lib/router.jsx'
import AuthButton from '../components/auth/AuthButton.jsx'
import AuthCard from '../components/auth/AuthCard.jsx'
import AuthInput from '../components/auth/AuthInput.jsx'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import { registerUser } from '../data/authStorage.js'

const initialValues = {
  nickname: '',
  email: '',
  password: '',
  repeatPassword: '',
}

function RegisterPage() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setFormError('')
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.nickname.trim()) {
      nextErrors.nickname = 'Введите никнейм'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Введите email'
    } else if (!values.email.includes('@')) {
      nextErrors.email = 'Email должен содержать @'
    }

    if (!values.password) {
      nextErrors.password = 'Введите пароль'
    } else if (values.password.length < 6) {
      nextErrors.password = 'Минимум 6 символов'
    }

    if (!values.repeatPassword) {
      nextErrors.repeatPassword = 'Повторите пароль'
    } else if (values.repeatPassword !== values.password) {
      nextErrors.repeatPassword = 'Пароли не совпадают'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      return
    }

    try {
      registerUser(values)
      navigate('/account')
    } catch (error) {
      setFormError(error.message)
    }
  }

  return (
    <AuthLayout>
      <AuthCard title="Регистрация">
        <form className="grid gap-[16px]" onSubmit={handleSubmit}>
          <AuthInput
            label="Никнейм"
            name="nickname"
            value={values.nickname}
            error={errors.nickname}
            onChange={handleChange}
            autoComplete="nickname"
          />
          <AuthInput
            label="Email"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <AuthInput
            label="Пароль"
            name="password"
            type="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <AuthInput
            label="Повтор пароля"
            name="repeatPassword"
            type="password"
            value={values.repeatPassword}
            error={errors.repeatPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />

          {formError && (
            <div className="rounded-[12px] border border-[#E74C3C]/30 bg-[#2A0D18]/60 px-[14px] py-[12px] text-[13px] text-[#FF8A8A]">
              {formError}
            </div>
          )}

          <AuthButton>Создать аккаунт</AuthButton>

          <p className="m-0 text-center text-[13px] text-[#8E90B0]">
            Уже есть аккаунт?{' '}
            <NavLink to="/login" className="text-[#C9A7FF] hover:text-white">
              Войти
            </NavLink>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}

export default RegisterPage
