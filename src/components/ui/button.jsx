import Icon from "./icon"

const Button = ({ 
  children, 
  variant = 'primary', 
  icon, 
  iconPosition = 'right', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center transition-colors duration-200'
  const variants = {
    primary: 'text-accent hover:text-white',
    secondary: 'text-white hover:text-accent',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-primary'
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} className="mr-2" />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className="ml-2" />}
    </button>
  )
}

export default Button