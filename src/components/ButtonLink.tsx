type Props = {
  variant?: "primary" | "secondary"
  href?: string
  children: React.ReactNode
  className?: string
}

export const ButtonLink = ({variant = "primary", href, children, className = ""}: Props) => {
  const baseClasses = "inline-flex items-center justify-center text-center whitespace-nowrap font-bebas-neue tracking-wider border-2 rounded-xl text-xl sm:text-2xl font-bold py-2.5 px-4 sm:px-6 transition-all duration-200 hover:shadow-md cursor-pointer"
  
  const variantClasses = variant === "primary"
    ? "bg-primary text-secondary border-primary hover:bg-primary-hover hover:border-primary-hover"
    : "border-primary bg-secondary text-primary hover:text-secondary hover:bg-primary hover:border-primary-hover"

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  )
}


