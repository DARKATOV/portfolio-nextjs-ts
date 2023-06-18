import Link from 'next/link'
import Image from 'next/image'

type Props = {
  src: string,
  title: string,
  text: string,
  href: string,
}

export default function Card({ src, title, text, href }: Props) {
  return (
    <div className="col">
      <div className="card h-100">
        <Image
          src={src}
          alt={title}
          className="card-img-top"
          width={90}
          height={200}
          priority
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link href={href} className="btn btn-dark">Ver</Link>
        </div>
      </div>
    </div>
  )
}
