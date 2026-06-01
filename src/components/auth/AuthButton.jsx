import Button from '../Button.jsx'

function AuthButton({ children, className = '', ...props }) {
  return (
    <Button type="submit" className={`w-full ${className}`.trim()} {...props}>
      {children}
    </Button>
  )
}

export default AuthButton
