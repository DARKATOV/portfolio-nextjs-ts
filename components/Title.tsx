import ButtonBack from '@/components/ButtonBack'

type Props = {
  text: string
  href?: string
}

export default function Title({ text, href }: Props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <ButtonBack href={href} />
      </div>
      <div className="col-md-4 offset-md-2">
        <h2>{text}</h2>
      </div>
    </div>
  )
}
