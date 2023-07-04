import { Container } from './styles'

interface TextareaProps {
  value?: string
  placeholder: string
}

// ...rest

export function Textarea({ value, placeholder }: TextareaProps) {
  return <Container placeholder={placeholder}>{value}</Container>
}
