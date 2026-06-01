function Button({ as: Component = 'button', children, className = '', ...props }) {
  return (
    <Component className={`btn ui-label ${className}`.trim()} {...props}>
      <span>{children}</span>
    </Component>
  )
}

export default Button
