interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...other }: ButtonProps): JSX.Element => {
  return (
    <button className="text-red-600" type="button" {...other}>
      {children}
      <span className="text-red-600">777</span>
    </button>
  )
}

Button.displayName = "Button"
export { Button, type ButtonProps }
