import { Container } from './styles'

interface ButtonTextProps {
  title: string
  isActive?: any // change any to boolean fixing the error
  onClick?: () => void
}

export function ButtonText({ title, isActive, ...rest }: ButtonTextProps) {
  return (
    <Container type="button" $isActive={isActive} {...rest}>
      {title}
    </Container>
  )
}
