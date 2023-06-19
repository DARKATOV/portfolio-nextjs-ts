import Link from 'next/link'
import Image from 'next/image'

type Props = {
  href?: string
}

export default function ButtonBack({ href }: Props) {
  const image = <Image
    src="/icons/arrow-left.svg"
    alt="Back"
    width={20}
    height={20}
    priority
  />

  if (!href) {
    return (
      <button className="btn btn-light" onClick={() => history.back()}>
        {image} Volver
      </button>
    )
  }

  return (
    <Link href={href} className="btn btn-light">
      {image} Volver
    </Link>
  )
}
