type Props = {
  variant?: "primary" | "secondary"
  href?: string
  children: React.ReactNode
}

export const ButtonLink = ({variant = "primary", href, children}: Props) => {
  let className = variant == "primary" ? 
    "bg-primary text-secondary font-bebas-neue tracking-wider border-2 rounded-xl text-2xl font-bold py-2.5 px-10 hover:bg-primary-hover transition-all duration-200 hover:shadow-md" : 
    "font-bebas-neue tracking-wider border-primary bg-secondary border-2 rounded-xl text-2xl font-bold py-2.5 px-10 text-primary hover:text-secondary hover:bg-primary hover:border-primary-hover transition-all duration-200 hover:shadow-md"

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}


