import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles.module.css'

type Props = {
  src: string
  title: string
  text: string
  href: string
}

export default function Card({ src, title, text, href }: Props) {
  return (
    <div className="col">
      <div className="card h-100">
        <Image
          src={src}
          alt={title}
          className={`card-img-top ${styles.imageCard}`}
          width={400}
          height={400}
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
