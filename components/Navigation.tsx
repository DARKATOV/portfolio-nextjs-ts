import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {
  href: string
  children: string
}

export function Navigation({ href, children}: Props) {
  const pathname = usePathname()
  let isActive: boolean

  if (href === '/') {
    isActive = pathname.endsWith('/')
  } else {
    isActive = pathname.includes(href)
  }

  return (
    <Link
      className={isActive ? "nav-link active" : "nav-link"}
      href={href}
    >
      {children}
    </Link>
  )
}