type Props = {
  href: string
  text: string
  className?: string
}

export const Link = ({ href, text, className }: Props) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  )
}
