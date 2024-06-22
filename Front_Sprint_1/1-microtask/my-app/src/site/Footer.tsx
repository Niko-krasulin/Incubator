type titleFooterProps = {
  titleFooter: string
}


export const Footer = ({titleFooter}:titleFooterProps) => {
  return (
      <div>{titleFooter}</div>
  )
}