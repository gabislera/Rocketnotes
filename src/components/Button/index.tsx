import { Container } from './styles'

interface ButtonProps {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false }: ButtonProps) {
  return (
    <Container type="button" disabled={isLoading}>
      {isLoading ? 'Carregando...' : title}
    </Container>
  )
}
