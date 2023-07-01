import { Container } from './styles'

interface TagProps {
  title: string
}

// ...rest

export function Tag({ title }: TagProps) {
  return <Container>{title}</Container>
}
