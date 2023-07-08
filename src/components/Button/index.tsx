import { Container } from './styles'

interface ButtonProps {
  title: string
  isLoading?: boolean
  type: 'button' | 'reset' | 'submit' | undefined
  onClick?: any
}

export function Button({
  title,
  type,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <Container onClick={onClick} type={type} disabled={isLoading}>
      {isLoading ? 'Carregando...' : title}
    </Container>
  )
}
