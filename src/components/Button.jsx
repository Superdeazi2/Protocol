function Button({ children, className = '', ...props }) {
  return (
    <button className={`btn ui-label ${className}`.trim()} {...props}>
      <span>{children}</span>
    </button>
  )
}

export default Button
