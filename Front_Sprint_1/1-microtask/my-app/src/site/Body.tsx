type BodyProps = {
  title: string
}

export const Body = ({title}:BodyProps) => {
  return (
      <div>{title}</div>
  )
}