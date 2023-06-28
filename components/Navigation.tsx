import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  href: string
  children: string
}

export function Navigation({ href, children}: Props) {
  const router = useRouter()
  let isActive: boolean

  if (href === '/') {
    isActive = router.asPath === '/'
  } else {
    isActive = router.asPath.includes(href)
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