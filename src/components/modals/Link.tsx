type Props = {
  href: string
  text: string
  className?: string
}

export const Link = ({ href, text, className }: Props) => {
  return (
    <a
      href={href}
      className={`focus:outline-none underline font-bold ${className}`}
    >
      {text}
    </a>
  )
}
