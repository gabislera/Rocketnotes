import { Container } from './styles'

interface ButtonProps {
  title: string
  isLoading?: boolean
  type: 'button' | 'reset' | 'submit' | undefined
}

export function Button({ title, type, isLoading = false }: ButtonProps) {
  return (
    <Container type={type} disabled={isLoading}>
      {isLoading ? 'Carregando...' : title}
    </Container>
  )
}
