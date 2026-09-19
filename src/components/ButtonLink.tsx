type Props = {
  variant?: "primary" | "secondary"
  href?: string
  children: React.ReactNode
}

export const ButtonLink = ({variant = "primary", href, children}: Props) => {
  return (
    <a href={href} className="font-bebas-neue tracking-wider border-primary bg-secondary border-2 rounded-xl text-2xl font-bold py-2.5 px-10 text-primary hover:text-secondary hover:bg-primary hover:border-primary-hover">
      {children}
    </a>
  )
}


